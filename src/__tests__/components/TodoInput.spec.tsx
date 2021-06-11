import React from 'react';
import { TodoInput } from '../../components/TodoInput';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { light } from '../../styles/theme';

describe('TodoInput', () => {
  it('should be able to submit the input text by "submitEditing" event', async () => {
    const mockTodoTask = jest.fn();
    
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={light}>
        <TodoInput addTask={mockTodoTask} />
      </ThemeProvider>
    );
    const inputText = getByPlaceholderText('Adicionar novo todo...');

    fireEvent.changeText(inputText, 'Primeira task');
    fireEvent(inputText, 'submitEditing');

    expect(mockTodoTask).toHaveBeenCalledWith('Primeira task');
    expect(inputText).toHaveProp('value', '');
  });
  it('should be able to submit the input text by addButton', () => {
    const mockTodoTask = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={light}>
        <TodoInput addTask={mockTodoTask} />
      </ThemeProvider>
    );;
    const inputText = getByPlaceholderText('Adicionar novo todo...');
    const addButton = getByTestId('add-new-task-button');

    fireEvent.changeText(inputText, 'Primeira task');
    fireEvent.press(addButton);

    expect(mockTodoTask).toHaveBeenCalledWith('Primeira task');
    expect(inputText).toHaveProp('value', '');
  });
});