import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const User = styled.Image`
  width: 40px;
  height: 40px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  font-weight: bold;
  min-height: 50px;
  line-height: 50px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
