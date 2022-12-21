import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { NewMeal } from '@screens/NewMeal';
import { KeepGoing } from '@screens/KeepGoing';
import { ViewMeal } from '@screens/ViewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="stats"
        component={Stats}
      />

      <Screen
        name="newmeal"
        component={NewMeal}
      />

      <Screen
        name="keepgoing"
        component={KeepGoing}
      />


      <Screen
        name="meals"
        component={ViewMeal}
      />
    </Navigator>
  );
}