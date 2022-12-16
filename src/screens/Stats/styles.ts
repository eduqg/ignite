import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 100%;
  border-radius: 20px;
`;

export const SectionText = styled.Text`
 text-align: center;
 margin-bottom: 24px;

${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
`};
`;

export const ListStats = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ItemStatus = styled.View`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 12px;
  padding: 16px;
`;

export const ItemStatusTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const ItemStatusSubtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`;
