import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

export const Wrapper = styled.View`
  background-color: ${props => props.theme.primary};
`

export const Container = styled.View`
  padding-top: ${StatusBar.currentHeight}px;
  padding-bottom: 44px;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Poppins-Regular';
`

export const HeaderTextSemi = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`
