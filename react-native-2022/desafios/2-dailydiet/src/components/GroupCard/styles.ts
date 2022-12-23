import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  padding: 12px;
  min-height: 50px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  padding-right: 10px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-width: 1px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Title = styled.Text`
  text-align: left;
  width: 100%;
  max-width: 240px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(Circle).attrs(({ theme }) => ({
  size: 14,
  weight: "fill",
}))``;
