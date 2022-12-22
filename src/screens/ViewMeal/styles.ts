import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

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

export const ViewYesNo = styled.View`
  flex-direction: row;
`;

export const LabelYes = styled.View`
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    border: 2px solid transparent;
  `};
`;
