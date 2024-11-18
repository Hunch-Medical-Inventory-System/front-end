import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { readDataFromTable, readRowFromTable } from "@/lib/supabaseClient";

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

  const inventoryItemId = ref(0);
  const inventoryItem = ref({
    item: "",
    location: "",
    quantity: 0
  });

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
      console.error(error);
    }
  }

  onMounted(() => {
    retrieveInventory({itemsPerPage: 10, page: 1, keywords: ""});
  });

  watch(inventoryItemId, async (newId) => {
    inventoryItem.value = await readRowFromTable("supplies", parseInt(newId));
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

  // const suppliesItemId = ref(0);
  // const suppliesItem = ref({
  //   item: "",
  //   location: "",
  //   possible_side_effects:"",
  //   quantity_in_pack: "",
  //   route_of_use: "",
  //   strength_or_volume: "",
  //   type: "",
  // });

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

  // watch(suppliesItemId, async newId => {
  //   suppliesItem.value= await readRowFromTable("supplies", parseInt(newId));
  // });

  return {
    suppliesLoading,
    currentSupplies,
    deletedSupplies,
    currentSuppliesLength,
    deletedSuppliesLength,
    retrieveSupplies
  };
})
