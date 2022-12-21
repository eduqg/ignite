import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface ButtonYesProps {
  yes: boolean;
  selected: boolean;
}

interface ContainerProps {
  inside: boolean;
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, inside }) =>
    inside ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  height: 100%;
  border-radius: 20px;
  margin-top: 16px;
`;

export const TextInput = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const DatesView = styled.View`
  flex-direction: row;
`;

export const InputDateField = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: 6px;
  padding: 16px;
`;

export const ViewYesNo = styled.View`
  flex-direction: row;
`;

export const ButtonYes = styled.TouchableOpacity<ButtonYesProps>`
  flex: 1;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    border: 2px solid transparent;
  `};

  ${(props) =>
    props.selected &&
    props.yes &&
    css`
      background-color: ${(props) => props.theme.COLORS.GREEN_LIGHT};
      border: 2px solid ${(props) => props.theme.COLORS.GREEN_DARK};
    `}

  ${(props) =>
    props.selected &&
    !props.yes &&
    css`
      background-color: ${(props) => props.theme.COLORS.RED_LIGHT};
      border: 2px solid ${(props) => props.theme.COLORS.RED_DARK};
    `}
`;
