import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";

import { MealStorageDTO } from "./MealStorageDTO";
import { MealByDateStorageDTO } from "./MealsByDateStorageDTO";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemove(mealRemove: MealStorageDTO) {
  try {
    const storedMeals: MealByDateStorageDTO[] = await mealsGetAll();

    let storageMealsByDateRemoved: MealByDateStorageDTO[] = storedMeals.map(
      (item: MealByDateStorageDTO) => {
        if (item.date === String(mealRemove.date)) {
          const removedMeals = item.meals.filter((meal) => {
            return meal.id !== mealRemove.id;
          });
          return {
            ...item,
            meals: removedMeals,
          };
        }
        return item;
      }
    );

    const datesWithMeals = storageMealsByDateRemoved.filter(
      (item) => item.meals.length > 0
    );

    const storage = JSON.stringify(datesWithMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
