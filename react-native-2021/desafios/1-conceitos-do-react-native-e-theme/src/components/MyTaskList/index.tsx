import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { useTheme } from 'styled-components';
import { Header, TaskButton, TaskMarker, TaskText } from './styles';

function FlatListHeaderComponent() {
  return (
    <View>
      <Header>Minhas tasks</Header>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const theme = useTheme();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TaskButton
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            done={item.done}
          >
            <TaskMarker
              testID={`marker-${index}`}
              done={item.done}
            />
            <TaskText
              done={item.done}
            >
              {item.title}
            </TaskText>
          </TaskButton>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        paddingBottom: 20,
      }}
      style={{
        paddingHorizontal: 24,
        paddingTop: 32,
        backgroundColor: theme?.background || '#fff'
      }}
    />
  )
}
 