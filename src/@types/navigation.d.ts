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
        meal: Meal;
      };
      stats: undefined;
      home: undefined;
      newmeal: undefined;
    }
  }
}