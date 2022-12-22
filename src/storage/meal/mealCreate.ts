import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AppError } from "@utils/AppError";

import { mealsGetAll } from "./mealsGetAll";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();
    // const storedMealsByDate = await mealsGetAllByDate();

    // const storageMealsByDateUpdated = storedMealsByDate.map(item => {

    //   return item;
    // })
    // const mealAlreadyExists = storedMeals.includes(newGroup);

    // if (mealAlreadyExists) {
    //   throw new AppError("Já existe uma refeição cadastrado com esse nome e data.");
    // }

    console.log([...storedMeals, newMeal]);

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
