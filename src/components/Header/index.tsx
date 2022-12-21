import { useNavigation, useRoute } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Logo, User, HeaderText } from "./styles";

import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png';
import { Text } from "react-native";

interface HeaderProps {
  showBackButton?: boolean;
  title?: string;
}

export function Header({ showBackButton = false, title = '' }: HeaderProps) {

  const navigation = useNavigation()
  const route = useRoute();

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {showBackButton ?
        (
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
        ) : (
          <>
            <Logo source={logoImg} />
            <User source={userImg} />
          </>
        )}

      {
        route?.name !== 'home' && (
          <>
            <HeaderText>{title}</HeaderText>
            <Text></Text>
          </>
        )
      }
    </Container>
  )
}