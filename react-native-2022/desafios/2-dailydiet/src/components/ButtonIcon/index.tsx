import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps } from './styles';
import { Title } from '@components/Button/styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps,
  title: string;
}

export function ButtonIcon({ title, icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
  return (
    <Container type={type}  {...rest}>
      <Icon
        name={icon}
        type={type}
      />
      <Title type={type}>{title}</Title>
    </Container>
  );
}