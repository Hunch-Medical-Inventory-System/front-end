import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { readDataFromTable, readRowFromTable } from "@/lib/supabaseClient";


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
    currentSuppliesLength,
    deletedSuppliesLength,
    retrieveSupplies
  };
})


export const useCrewStore = defineStore("crew", () => {
  const currentCrew = ref({ data: [{}], count: 0 });
  const deletedCrew = ref({ data: [{}], count: 0 });

  const currentCrewLength = computed(() => currentCrew.value.count);
  const deletedCrewLength = computed(() => deletedCrew.value.count);

  const crewLoading = ref(true);

  /**
   * Fetches and updates the current and deleted crew from the database.
   *
   * @returns {Promise<void>} - A promise that resolves once the crew data is retrieved and updated.
   */
  const retrieveCrew = async (options = {itemsPerPage: 10, page: 1, keywords: "",}) => {
    crewLoading.value = true;
    const data = await readDataFromTable("crew", options);
    currentCrew.value = data.currentData;
    deletedCrew.value = data.deletedData;
    crewLoading.value = false;
  };

  onMounted(() => {
    retrieveCrew();
  });

  return {
    crewLoading,
    currentCrew,
    deletedCrew,
    currentCrewLength,
    deletedCrewLength,
    retrieveCrew
  };
})


export const useLogsStore = defineStore("logs", () => {
  const currentLogs = ref({ data: [{}], count: 0 });
  const deletedLogs = ref({ data: [{}], count: 0 });

  const currentLogsLength = computed(() => currentLogs.value.count);
  const deletedLogsLength = computed(() => deletedLogs.value.count);

  const logsLoading = ref(true);

  /**
   * Fetches and updates the current and deleted logs from the database.
   *
   * @returns {Promise<void>} - A promise that resolves once the logs data is retrieved and updated.
   */
  const retrieveLogs = async (
    options = { itemsPerPage: 10, page: 1, keywords: "" }
  ) => {
    logsLoading.value = true;
    const data = await readDataFromTable("logs", options);
    currentLogs.value = data.currentData;
    deletedLogs.value = data.deletedData;
    logsLoading.value = false;
  };

  onMounted(() => {
    retrieveLogs();
  });

  return {
    logsLoading,
    currentLogs,
    deletedLogs,
    currentLogsLength,
    deletedLogsLength,
    retrieveLogs,
  };
});
