import { useState } from "react";
import { Alert, FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import todoImage from '../../../assets/todo.png';
import blackImage from '../../../assets/black.png';
import plusImage from '../../../assets/plus.png';
import boardImage from '../../../assets/board.png';
import trashImage from '../../../assets/trash.png';

import { styles } from "./styles";
import { CreatedConcluded } from "../../components/CreatedConcluded";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participantName === '') return;

    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={blackImage} resizeMode="cover" style={styles.blackImage}>
        <Image style={styles.logo} source={todoImage} />
      </ImageBackground>

      <View style={styles.content}>
        {/* <Text style={styles.eventName}>
          Nome do evento
        </Text>

        <Text style={styles.eventDate}>
          Sexta, 4 de Novembro de 2022.
        </Text> */}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantName}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              <Image style={styles.icon} source={plusImage} />
            </Text>
          </TouchableOpacity>
        </View>

        <CreatedConcluded created={2} concluded={3} />

        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
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