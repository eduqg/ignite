import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealRemoveByName(mealDeleted: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const meals = storedMeals.filter((meal) => meal.name !== mealDeleted.name);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    // await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
