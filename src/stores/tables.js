import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { supabase } from "@/lib/supabaseClient";

const readDataFromTable = async (table) => {
  const { data, error } = await supabase.from(table).select("*").eq("is_deleted", false);
  if (error) {
    console.log(error);
  }

  return data;
}

export const useCrewStore = defineStore("crew", () => {

  const crewMembers = ref([{}]);
  const updateCrewMember = async () => {
    crewMembers.value = await readDataFromTable("crew");
  };

  onMounted(() => {
    updateCrewMember();
  });

  return { crewMembers, updateCrewMember };
});

export const useInventoryStore = defineStore("inventory", () => {

  const inventory = ref([{}]);
  const retrieveInventory = async () => {
    inventory.value = await readDataFromTable("inventory");
  };

  const updateInventoryRow = async (id) => {
    const { error } = await fetch("inventory", id);
    if (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    retrieveInventory();
  });

  return { inventory, retrieveInventory };
})
