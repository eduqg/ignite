import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Logo, User } from "./styles";

import logoImg from '@assets/logo.png';
import userImg from '@assets/user.png';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
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
    </Container>
  )
}