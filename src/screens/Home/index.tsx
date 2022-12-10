import { useMemo, useState } from "react";
import { Alert, FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

import { ITask, Task } from "../../components/Task";

import todoImage from '../../../assets/todo.png';
import blackImage from '../../../assets/black.png';
import plusImage from '../../../assets/plus.png';
import boardImage from '../../../assets/board.png';

import { styles } from "./styles";
import { CreatedConcluded } from "../../components/CreatedConcluded";

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (taskName === '') return;

    const foundTask = tasks.find(item => item.name === taskName)

    if (foundTask) {
      return Alert.alert("task existe", "Já existe um taske na lista com esse nome.");
    }

    setTasks(prevState => [...prevState, {
      name: taskName,
      checked: false
    }]);
    setTaskName('');
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover o taske ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.name !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function switchCheckTask(name: string) {
    setTasks(prevState => {
      const newTasks = prevState.map((task: ITask) => {
        if (task.name === name) {
          return {
            name: task.name,
            checked: !task.checked
          }
        }
        return task;
      })

      return newTasks;
    })
  }

  const concludedTasks = useMemo(() => {
    const newConcludedTasks = tasks.filter(item => item.checked)
    return newConcludedTasks.length
  }, [tasks])

  return (
    <View style={styles.container}>
      <ImageBackground source={blackImage} resizeMode="cover" style={styles.blackImage}>
        <Image style={styles.logo} source={todoImage} />
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setTaskName}
            value={taskName}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>
              <Image style={styles.icon} source={plusImage} />
            </Text>
          </TouchableOpacity>
        </View>

        <CreatedConcluded created={tasks.length} concluded={concludedTasks} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              name={item.name}
              checked={item.checked}
              onRemove={() => handleTaskRemove(item.name)}
              onSwitch={switchCheckTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContent}>
              <Image style={styles.board} source={boardImage} />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}