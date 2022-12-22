import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Hour, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  meal: MealStorageDTO;
}

export function GroupCard({ meal, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>

      <Hour>
        {new Date(meal.time).getHours()}:{new Date(meal.time).getMinutes()}
      </Hour>

      <Title>
        {meal.name}
      </Title>

      <Icon color={meal.insideDiet ? '#CBE4B4' : '#F3BABD'} />
    </Container>
  )
}