import { BackButton, BackIcon } from "@components/Header/styles";
import { TouchableOpacityProps } from "react-native";
import { Container, Subtitle, Title } from "./styles";

interface PercentageProps extends TouchableOpacityProps {
  value: string;
  subtitle: string;
}

export function Percentage({ value, subtitle, ...rest }: PercentageProps) {
  return (
    <Container {...rest}>
      <BackButton
        onPress={() => { }}
        style={{
          position: 'absolute',
          right: 20,
          top: 20
        }}>
        <BackIcon style={{ transform: [{ rotate: '135deg' }] }} />
      </BackButton>

      <Title>
        {value}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}