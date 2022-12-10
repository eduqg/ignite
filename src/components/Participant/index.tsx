import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import imageTrash from '../../../assets/trash.png'
import imageCheck from '../../../assets/check.png'
import imageNotCheck from '../../../assets/notcheck.png'

import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  checked: boolean;
  onRemove: () => void
}

export function Participant({ name, checked, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
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