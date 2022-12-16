import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Hour, Title } from "./styles";

type GroupCardProps = TouchableOpacityProps & {
  date: string;
  title: string;
}

export function GroupCard({ date, title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>

      <Hour>
        {date}
      </Hour>

      <Title>
        {title}
      </Title>

      <Icon />
    </Container>
  )
}