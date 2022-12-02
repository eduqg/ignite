import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

import checkIcon from '../../assets/icons/Check.png';
import {Wrapper, InputContainer, Input, AddButton } from './styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const theme = useTheme();

  function handleAddNewTask() {
    if (task !== '') {
      addTask(task)
      setTask('')
    }
  }

  return (
    // <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
    <Wrapper>
      <InputContainer>
        <Input
          placeholder="Adicionar novo todo..."
          returnKeyType="send"
          onChangeText={setTask}
          onSubmitEditing={handleAddNewTask}
          value={task}
          placeholderTextColor={theme?.text || '#333'}
        />
        <AddButton
          testID="add-new-task-button"
          activeOpacity={0.7}
          onPress={handleAddNewTask}
        >
          <Image source={checkIcon} />
        </AddButton>
      </InputContainer>
    </Wrapper>
  )
}
 