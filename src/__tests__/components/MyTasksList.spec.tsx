import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { MyTasksList } from '../../components/MyTaskList';
import { ThemeProvider } from 'styled-components/native';
import { light } from '../../styles/theme';

let tasks: {
  id: number;
  title: string;
  done: boolean;
}[] = [];

let mockedOnLongPress: jest.Mock;
let mockedOnPress: jest.Mock;

describe('MyTasksList', () => {

  beforeAll(() => {
    tasks = [
      {
        id: new Date().getTime(),
        title: 'Primeiro todo',
        done: false
      },
      {
        id: new Date().getTime() + 1,
        title: 'Segundo todo',
        done: false
      },
      {
        id: new Date().getTime() + 2,
        title: 'Terceiro todo',
        done: true
      },
    ];

    mockedOnLongPress = jest.fn();
    mockedOnPress = jest.fn();
  });

  it('should be able to render all tasks', () => {
    const { getByText } = render(
      <ThemeProvider theme={light}>
        <MyTasksList tasks={tasks} onLongPress={mockedOnLongPress} onPress={mockedOnPress} />
      </ThemeProvider>
    );

    getByText('Primeiro todo');
    getByText('Segundo todo');
    getByText('Terceiro todo');
  });

  it('should be able to handle "longPress" event', () => {
    const { getByText } = render(
      <ThemeProvider theme={light}>
        <MyTasksList tasks={tasks} onLongPress={mockedOnLongPress} onPress={mockedOnPress} />
      </ThemeProvider>
    );

    const firstTask = getByText('Primeiro todo');

    fireEvent(firstTask, 'longPress');

    expect(mockedOnLongPress).toHaveBeenCalledWith(tasks[0].id);
  });

  it('should be able to handle "press" event', () => {
    const { getByText } = render(
      <ThemeProvider theme={light}>
        <MyTasksList tasks={tasks} onLongPress={mockedOnLongPress} onPress={mockedOnPress} />
      </ThemeProvider>
    );

    const secondTask = getByText('Segundo todo');

    fireEvent.press(secondTask);

    expect(mockedOnPress).toHaveBeenCalledWith(tasks[1].id);
  });
})