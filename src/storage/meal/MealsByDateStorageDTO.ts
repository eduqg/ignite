import { MealStorageDTO } from "./MealStorageDTO";

export type MealsByDateStorageDTO = {
  date: string;
  meals: MealStorageDTO[];
}[];
