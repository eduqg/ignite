import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { Wrapper, Container, HeaderText, HeaderTextSemi } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Container>
        <HeaderText>to.</HeaderText>
        <HeaderTextSemi>do</HeaderTextSemi>
      </Container>
    </Wrapper>
  )
}
