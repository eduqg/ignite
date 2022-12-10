import { Text, View } from "react-native";

import { styles } from "./styles";

interface CreatedConcludedProps {
  created: number;
  concluded: number;
}

export function CreatedConcluded({ created, concluded }: CreatedConcludedProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainter}>
        <Text style={styles.createdText}>
          Criadas
        </Text>
        <Text style={styles.number}>
          {created}
        </Text>
      </View>

      <View style={styles.labelContainter}>
        <Text style={styles.concludedText}>
          Concluidas
        </Text>
        <Text style={styles.number}>
          {concluded}
        </Text>
      </View>
    </View>
  )
}