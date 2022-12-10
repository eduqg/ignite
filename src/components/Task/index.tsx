import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import imageTrash from '../../../assets/trash.png'
import imageCheck from '../../../assets/check.png'
import imageNotCheck from '../../../assets/notcheck.png'

import { styles } from "./styles";

export interface ITask {
  name: string;
  checked: boolean;
}

interface TaskProps {
  name: string;
  checked: boolean;
  onRemove: () => void;
  onSwitch: (taskName: string) => void;
}

export function Task({ name, checked, onRemove, onSwitch }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onSwitch(name)}>
        {checked ? (
          <Image style={styles.check} source={imageCheck} />
        ) : (
          <Image style={styles.check} source={imageNotCheck} />
        )}
      </TouchableOpacity>

      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image style={styles.trash} source={imageTrash} />
      </TouchableOpacity>
    </View>
  )
}