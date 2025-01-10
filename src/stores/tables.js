import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { readDataFromTable, readDeletableDataFromTable, readExpirableDataFromTable, readRowFromTable } from "@/lib/supabaseClient";


export const useInventoryStore = defineStore("inventory", () => {

  const currentInventory = ref({ data: [{}], count: 0 });
  const deletedInventory = ref({ data: [{}], count: 0 });
  const expiredInventory = ref({ data: [{}], count: 0 });

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
    const data = await readExpirableDataFromTable("inventory", options);
    currentInventory.value = data.currentData;
    deletedInventory.value = data.deletedData;
    expiredInventory.value = data.expiredData;

    inventoryLoading.value = false;
  };

  onMounted(() => {
    retrieveInventory({itemsPerPage: 10, page: 1, keywords: ""});
  });

  return {
    inventoryLoading,
    currentInventory,
    deletedInventory,
    expiredInventory,
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
    const data = await readDeletableDataFromTable("supplies", options);
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

  const currentCrewLength = computed(() => currentCrew.value.count);

  const crewLoading = ref(true);

  /**
   * Retrieves and updates the current crew data from the database.
   *
   * @param {{itemsPerPage: number, page: number, keywords: string}} options - The options to pass to the readDataFromTable function.
   * @returns {Promise<void>} - A promise that resolves once the crew data is retrieved and updated.
   */
  const retrieveCrew = async (options = {itemsPerPage: 10, page: 1, keywords: "",}) => {
    crewLoading.value = true;
    const data = await readDataFromTable("crew", options);
    currentCrew.value = data;
    crewLoading.value = false;
  };

  onMounted(() => {
    retrieveCrew();
  });

  return {
    crewLoading,
    currentCrew,
    currentCrewLength,
    retrieveCrew
  };
})


export const useLogsStore = defineStore("logs", () => {
  const currentLogs = ref({ data: [{}], count: 0 });

  const currentLogsLength = computed(() => currentLogs.value.count);

  const logsLoading = ref(true);

  /**
   * Retrieves and updates the current logs from the database.
   *
   * @param {{itemsPerPage: number, page: number, keywords: string}} options - The options to pass to the readDataFromTable function.
   * @returns {Promise<void>} - A promise that resolves once the logs data is retrieved and updated.
   */
  const retrieveLogs = async (
    options = { itemsPerPage: 10, page: 1, keywords: "" }
  ) => {
    logsLoading.value = true;
    const data = await readDataFromTable("logs", options);
    currentLogs.value = data;
    logsLoading.value = false;
  };

  onMounted(() => {
    retrieveLogs();
  });

  return {
    logsLoading,
    currentLogs,
    currentLogsLength,
    retrieveLogs,
  };
});
