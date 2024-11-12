import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { supabase } from "@/lib/supabaseClient";

  /**
   * Reads data from a Supabase table and separates it into
   * current (non-deleted) and deleted data.
   * @param {string} table - The name of the table to read from
   * @returns {Promise<{ currentData: object[], deletedData: object[] }>}
   *  currentData: the data from the table that has not been deleted
   *  deletedData: the data from the table that has been deleted
   */
const readDataFromTable = async (table, options = { itemsPerPage: 100, page: 1, keywords: "" }) => {
  let currentData = [{}];
  let deletedData = [{}];
  try {
    let currentResponse = await supabase
      .from(table)
      .select("*", { count: "exact" })
      .order("id", { ascending: true })
      .eq("is_deleted", false)
      .range(
        options.itemsPerPage * (options.page - 1),
        options.itemsPerPage * options.page - 1
      );

    let deletedResponse = await supabase
      .from(table)
      .select("*")
      .order("id", { ascending: true })
      .eq("is_deleted", true)
      .range(
        options.itemsPerPage * (options.page - 1),
        options.itemsPerPage * options.page - 1
      );

    currentData = currentResponse;
    deletedData = deletedResponse;
  } catch (error) {
    console.error(error);
  }

  return { currentData, deletedData };
};


const updateDataInTable = async (table, id, data) => {
  const { error } = await supabase.from(table).update(data).eq("id", id);
  if (error) {
    console.error(error);
  }
}

export const useCrewStore = defineStore("crew", () => {

  const currentCrewMembers = ref([{}]);
  const deletedCrewMembers = ref([{}]);

  const currentCrewMembersLength = computed(() => currentCrewMembers.value.length);
  const deletedCrewMembersLength = computed(() => deletedCrewMembers.value.length);

  const crewLoading = ref(true);

  /**
   * Retrieves the current and deleted crew members from the database and updates the reactive values.
   *
   * @returns {Promise<void>} - A promise that resolves once the crew members data is retrieved and updated.
   */
  const retrieveCrewMembers = async () => {
    const data = await readDataFromTable("crew");
    currentCrewMembers.value = data.currentData;
    deletedCrewMembers.value = data.deletedData;
};

  onMounted(() => {
    retrieveCrewMembers();
  });

  return {
    crewLoading,
    currentCrewMembers,
    deletedCrewMembers,
    currentCrewMembersLength,
    deletedCrewMembersLength,
    retrieveCrewMembers
  };
});

export const useInventoryStore = defineStore("inventory", () => {

  const currentInventory = ref({data:[{}], count:0});
  const deletedInventory = ref({ data: [{}], count: 0 });

  const currentInventoryLength = computed(() => currentInventory.value.count);
  const deletedInventoryLength = computed(() => deletedInventory.value.count);

  const inventoryLoading = ref(true);

  /**
   * Retrieves the current and deleted inventory data from the database and updates the reactive values.
   *
   * @returns {Promise<void>} - A promise that resolves once the inventory data is retrieved and updated.
   */
  const retrieveInventory = async (options) => {
    inventoryLoading.value = true;
    const data = await readDataFromTable("inventory", options);
    currentInventory.value = data.currentData;
    deletedInventory.value = data.deletedData;
    inventoryLoading.value = false;
  };

  const updateInventoryRow = async (id) => {
    const { error } = await fetch("inventory", id);
    if (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    retrieveInventory({itemsPerPage: 10, page: 1, keywords: ""});
  });

  return {
    inventoryLoading,
    currentInventory,
    deletedInventory,
    currentInventoryLength,
    deletedInventoryLength,
    retrieveInventory
  };
})


export const useSuppliesStore = defineStore("supplies", () => {

  const currentSupplies = ref({ data: [{}], count: 0 });
  const deletedSupplies = ref({ data: [{}], count: 0 });

  const currentSuppliesLength = computed(() => currentSupplies.value.count);
  const deletedSuppliesLength = computed(() => deletedSupplies.value.count);

  // const suppliesItem = ref({
  //   type: '',
  //   item: '',
  //   strength_or_volume: '',
  //   route_of_use: '',
  //   quantity_in_pack: '',
  //   possible_side_effects: '',
  //   location: '',
  // });

  const suppliesItem = ref({
    item: "Fluconazole (Diflucan)",
    location: "B2",
    possible_side_effects:
      "Headache, dizziness, nausea, abdominal pain, vomiting, diarrhea, rash",
    quantity_in_pack: "5 tablet",
    route_of_use: "Oral",
    strength_or_volume: "150 mg",
    type: "Antifungal",
  });
  const suppliesItemId = ref(1);

  const suppliesLoading = ref(true);

  /**
   * Fetches and updates the current and deleted supplies from the database.
   *
   * @returns {Promise<void>} - A promise that resolves once the supplies data is retrieved and updated.
   */
  const retrieveSupplies = async (options = {itemsPerPage: 10, page: 1, keywords: "",}) => {
    suppliesLoading.value = true;
    const data = await readDataFromTable("supplies", options);
    currentSupplies.value = data.currentData;
    deletedSupplies.value = data.deletedData;
    suppliesLoading.value = false;
  };

  onMounted(() => {
    retrieveSupplies();
  });

  return {
    suppliesLoading,
    currentSupplies,
    deletedSupplies,
    suppliesItem,
    suppliesItemId,
    currentSuppliesLength,
    deletedSuppliesLength,
    retrieveSupplies
  };
})
