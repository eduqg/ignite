import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";

import { MealStorageDTO } from "./MealStorageDTO";
import { MealByDateStorageDTO } from "./MealsByDateStorageDTO";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealUpdate(mealUpdate: MealStorageDTO) {
  try {
    const storedMeals: MealByDateStorageDTO[] = await mealsGetAll();

    let storageMealsByDateUpdated: MealByDateStorageDTO[] = storedMeals.map(
      (item: MealByDateStorageDTO) => {
        if (item.date === String(mealUpdate.date)) {
          const updatedMeals = item.meals.map((meal) => {
            if (meal.id === mealUpdate.id) {
              return mealUpdate;
            }
            return meal;
          });
          return {
            date: item.date,
            meals: updatedMeals,
          };
        }
        return item;
      }
    );

    const storage = JSON.stringify(storageMealsByDateUpdated);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
