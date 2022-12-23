import { MealStorageDTO } from "./MealStorageDTO";

export type MealByDateStorageDTO = {
  date: string;
  meals: MealStorageDTO[];
};
