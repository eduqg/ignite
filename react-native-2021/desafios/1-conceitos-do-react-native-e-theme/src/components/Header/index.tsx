import React from 'react';
import { Switch } from 'react-native';
import { Container, HeaderText, HeaderTextSemi } from './styles';


interface HeaderProps {
  isEnabled: boolean;
  setIsEnabled(data: boolean): void
}


export function Header({ isEnabled, setIsEnabled }: HeaderProps) {
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Container>
      <HeaderText>to.</HeaderText>
      <HeaderTextSemi>do</HeaderTextSemi>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  )
}
