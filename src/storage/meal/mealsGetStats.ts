import { mealsGetAll } from "./mealsGetAll";

export interface MealStats {
  bestSequence: number;
  mealsNumber: number;
  mealsInsideDiet: number;
  mealsOutsideDiet: number;
}

import { MealByDateStorageDTO } from "./MealsByDateStorageDTO";

export async function mealsGetStats(): Promise<MealStats> {
  try {
    const storedMeals: MealByDateStorageDTO[] = await mealsGetAll();

    let bestSequence = 0;
    let mealsNumber = 0;
    let mealsInsideDiet = 0;
    let mealsOutsideDiet = 0;

    storedMeals.map((item: MealByDateStorageDTO) => {
      let currentBestSequence = 0;
      item.meals.map((meal) => {
        mealsNumber += 1;

        if (meal.insideDiet) {
          mealsInsideDiet += 1;
          currentBestSequence += 1;
        } else {
          mealsOutsideDiet += 1;
        }
        return meal;
      });

      if (currentBestSequence > bestSequence) {
        bestSequence = currentBestSequence;
      }

      return item;
    });

    return {
      bestSequence,
      mealsNumber,
      mealsInsideDiet,
      mealsOutsideDiet,
    } as MealStats;
  } catch (error) {
    throw error;
  }
}
