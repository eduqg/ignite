import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (taskName === '') return;

    if (tasks.includes(taskName)) {
      return Alert.alert("task existe", "Já existe um taske na lista com esse nome.");
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover o taske ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do taske"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione taskes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}