import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealByDateStorageDTO } from "./MealsByDateStorageDTO";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    
    const mealsByDate: MealByDateStorageDTO[] = storage ? JSON.parse(storage) : [];

    return mealsByDate;
  } catch (error) {
    throw error;
  }
}
