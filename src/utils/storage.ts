import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@tasks";

export async function saveTasks(tasks: any[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error("Error saving tasks:", e);
  }
}

export async function loadTasks() {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error("Error loading tasks:", e);
    return [];
  }
}
