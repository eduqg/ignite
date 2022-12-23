import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px 0;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const SectionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-bottom: 8px;
`;

export const GroupText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
`;
