import styled, { css } from 'styled-components/native'

interface TaskButtonProps {
  done: boolean
}

interface TaskMarkerProps {
  done: boolean
}

interface TaskTextProps {
  done: boolean
}

export const Header = styled.Text`
  color: ${props => props.theme.text};
  font-size: 24px;
  font-family: Poppins-SemiBold;
`

export const TaskButton = styled.TouchableOpacity<TaskButtonProps>`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.done &&
    css`
      background-color: rgba(25, 61, 223, 0.1);
    `}
`

export const TaskMarker = styled.View<TaskMarkerProps>`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.text};
  margin-right: 10px;

  ${props =>
    props.done &&
    css`
      background-color: ${props => props.theme.primary};
    `}
`

export const TaskText = styled.Text<TaskTextProps>`
  color: ${props => props.theme.text};

  ${props =>
    props.done &&
    css`
      color: ${props => props.theme.gray};
      text-decoration-line: line-through;
    `}
`
