import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTaskList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface HomeProps {
  isEnabled?: boolean;
  setIsEnabled?(data: boolean): void
}

export function Home({ isEnabled = false, setIsEnabled = () => {} }: HomeProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([...tasks, { id: new Date().getTime(), title: newTaskTitle, done: false }])
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      }
      return item;
    })

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(item => {
      return item.id !== id
    })

    setTasks(newTasks)
  }

  return (
    <>
      <Header isEnabled={isEnabled} setIsEnabled={setIsEnabled} />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}