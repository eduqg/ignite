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
          placeholderTextColor={theme.text}
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

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});