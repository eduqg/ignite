import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background-color: ${props => props.theme.background};
`

export const InputContainer = styled.View`
  background-color: ${props => props.theme.light};
  border-radius: 5px;
  margin-top: -25px;
  margin-left: 40px;
  margin-right: 40px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  elevation: 5;
`

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.text};
  padding-left: 12px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const AddButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.success};
  height: 50px;
  padding-right: 16px;
  padding-left: 16px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`
