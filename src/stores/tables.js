import { defineStore } from "pinia";
import { ref, computed } from "vue";

const readDataFromTable = async (table) => {
  const { data, error } = await supabase.from(table).select("*").eq("is_deleted", false);
  if (error) {
    console.log(error);
  }

  return data;
}

export const useCounterStore = defineStore("counter", () => {

  const crewMembers = ref([{ id: 1, name: "Eduardo" }]);

  const updateCrewMember = () => {
    crewMembers.value = readDataFromTable("crew_members");
  };

  return { crewMembers, name, doubleCount, updateCrewMember };
});
