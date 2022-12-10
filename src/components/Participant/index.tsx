import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}