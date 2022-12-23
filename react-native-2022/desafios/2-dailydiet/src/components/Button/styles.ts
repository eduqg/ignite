import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.WHITE};
  border: 1px solid
    ${({ theme, type }) =>
      type === "SECONDARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  ${({ theme, type }) => css`
    color: ${type === "SECONDARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  `};
`;
