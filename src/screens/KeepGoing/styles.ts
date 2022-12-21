import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface TextKeepGoingProps {
  keep: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const TextKeepGoing = styled.Text<TextKeepGoingProps>`
  ${({ theme, keep }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${keep ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-bottom: 32px;
`;
