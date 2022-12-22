import { Header } from '@components/Header'
import React, { useState } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import {
  Container,
  Content,
  TextInput,
  DatesView,
  ViewYesNo,
  ButtonYes,
  InputDateField
} from './styles'
import { Circle } from 'phosphor-react-native'
import { InputDate } from '@components/InputDate'
import { useNavigation } from '@react-navigation/native'
import { mealCreate } from '@storage/meal/mealCreate'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));
  const [insideDiet, setInsideDiet] = useState(false);


  async function handleNew() {
    try {
      const mealToCreate: MealStorageDTO = {
        name,
        description,
        date,
        time,
        insideDiet,
      }
      console.log(
        name,
        description,
        `${String(time.getDay()).padStart(2, '0')}/${time.getMonth()}/${time.getFullYear()}`,
        `${time.getHours()}:${time.getMinutes()}`,
        insideDiet
      )

      await mealCreate(mealToCreate);
      navigation.navigate('keepgoing', { keep: insideDiet });
    } catch (error) {
      // if (error instanceof AppError) {
      //   Alert.alert('Novo Grupo', error.message);
      // } else {
      //   Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      //   console.log(error);
      // }
    }
  }

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };

  function onDateSelected(event: DateTimePickerEvent, value: Date | undefined) {
    if (value) setDate(value);
    setDatePicker(false);
  };

  function onTimeSelected(event: DateTimePickerEvent, value: Date | undefined) {
    if (value) setTime(value);
    setTimePicker(false);
  };

  function handleSetInsideDiet(value: boolean) {
    setInsideDiet(value);
  };


  return (
    <Container>

      <Header showBackButton title='Nova refeição' />

      <Content>
        <TextInput>Nome</TextInput>

        <Input
          placeholder="Digite o nome da refeição"
          onChangeText={setName}
        />

        <TextInput>Descrição</TextInput>

        <Input
          placeholder="Digite uma descrição"
          onChangeText={setDescription}
        />

        <TextInput>Data</TextInput>

        <DatesView>
          {!datePicker && (
            <InputDateField
              onPress={showDatePicker}
              style={{ marginRight: 8 }}
            >
              <Text>{String(time.getDay()).padStart(2, '0')}/{time.getMonth()}/{time.getFullYear()}</Text>
            </InputDateField>
          )}

          {!timePicker && (
            <InputDateField
              onPress={showTimePicker}
              style={{ marginRight: 8 }}
            >
              <Text>{time.getHours()}:{time.getMinutes()}</Text>
            </InputDateField>
          )}
        </DatesView>


        {datePicker && (
          <InputDate
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}

        {timePicker && (
          <InputDate
            value={time}
            mode={'time'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onTimeSelected}

          />
        )}

        <TextInput>Está dentro da dieta?</TextInput>

        <ViewYesNo>
          <ButtonYes selected={insideDiet === true} yes onPress={() => handleSetInsideDiet(true)} style={{ marginRight: 4 }}>
            <View style={{ backgroundColor: '#639339', height: 8, width: 8, borderRadius: 4 }} />
            <Text style={{ marginLeft: 8 }}>Yes</Text>
          </ButtonYes>
          <ButtonYes selected={insideDiet === false} yes={false} onPress={() => handleSetInsideDiet(false)} style={{ marginLeft: 4 }}>
            <View style={{ backgroundColor: '#BF3B44', height: 8, width: 8, borderRadius: 4 }} />
            <Text style={{ marginLeft: 8 }}>No</Text>
          </ButtonYes>
        </ViewYesNo>

        <Button
          title="Cadastrar Refeição"
          style={{ marginTop: 180, backgroundColor: '#333638' }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
