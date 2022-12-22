import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { Meal } from "./Meal";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      keepgoing: {
        keep: boolean;
      };
      meals: {
        meal: MealStorageDTO;
      };
      stats: undefined;
      home: undefined;
      newmeal: undefined;
    }
  }
}