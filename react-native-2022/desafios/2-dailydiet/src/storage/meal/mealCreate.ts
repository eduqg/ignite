import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";

import { MealStorageDTO } from "./MealStorageDTO";
import { MealByDateStorageDTO } from "./MealsByDateStorageDTO";

import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals: MealByDateStorageDTO[] = await mealsGetAll();

    const hasDateWithMeals =
      storedMeals &&
      storedMeals.find((item) => {
        return item.date === String(newMeal.date);
      });

    let storageMealsByDateUpdated: MealByDateStorageDTO[] = storedMeals || [];

    if (hasDateWithMeals) {
      storageMealsByDateUpdated = storedMeals.map(
        (item: MealByDateStorageDTO) => {
          if (item.date === String(newMeal.date)) {
            return {
              date: item.date,
              meals: [...item.meals, newMeal],
            };
          }
          return item;
        }
      );
    } else {
      storageMealsByDateUpdated = [
        ...storageMealsByDateUpdated,
        {
          date: String(newMeal.date),
          meals: [newMeal],
        },
      ];
    }

    const storage = JSON.stringify(storageMealsByDateUpdated);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
