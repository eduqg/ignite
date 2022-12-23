import { Header } from '@components/Header'
import React, { useState } from 'react'
import { Alert, Platform, Text, View } from 'react-native'
import uuid from 'react-native-uuid';


import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { InputDate } from '@components/InputDate'
import { useNavigation, useRoute } from '@react-navigation/native'
import { mealCreate } from '@storage/meal/mealCreate'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { mealUpdate } from '@storage/meal/mealUpdate'

import {
  Container,
  Content,
  TextInput,
  DatesView,
  ViewYesNo,
  ButtonYes,
  InputDateField
} from './styles'
interface RouteParams {
  meal?: MealStorageDTO,
  isEdit?: boolean
}

export function NewMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal, isEdit } = route.params as RouteParams;

  const [name, setName] = useState(meal?.name || '');
  const [description, setDescription] = useState(meal?.description || '');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(meal?.date ? new Date(
    Number(meal?.date.split('/')[2]),
    Number(meal?.date.split('/')[1]) - 1,
    Number(meal?.date.split('/')[0]),
  ) : undefined);
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(meal?.time ? new Date(
    meal?.time
  ) : undefined);
  const [insideDiet, setInsideDiet] = useState(meal?.insideDiet);

  async function handleNew() {
    try {
      if (name && description && date && time && insideDiet !== undefined) {
        const mealToCreate: MealStorageDTO = {
          id: meal?.id ? meal?.id : String(uuid.v4()),
          name,
          description,
          date: `${String(new Date(date).getDate()).padStart(2, '0')}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`,
          time: time.toISOString(),
          insideDiet,
        }

        if (!isEdit) {
          await mealCreate(mealToCreate);
        } else {
          await mealUpdate(mealToCreate);
        }
        navigation.navigate('keepgoing', { keep: insideDiet });
      }
    } catch (error) {
      Alert.alert('Erro ao criar refeição');
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
          defaultValue={meal?.name || ''}
          onChangeText={setName}
        />

        <TextInput>Descrição</TextInput>

        <Input
          placeholder="Digite uma descrição"
          defaultValue={meal?.description || ''}
          onChangeText={setDescription}
        />

        <TextInput>Data</TextInput>

        <DatesView>
          {!datePicker && (
            <InputDateField
              onPress={showDatePicker}
              style={{ marginRight: 8 }}
            >
              <Text>{date ? `${String(date.getDate()).padStart(2, '0')}/${date.getMonth() + 1}/${date.getFullYear()}` : '--:--'}</Text>
            </InputDateField>
          )}

          {!timePicker && (
            <InputDateField
              onPress={showTimePicker}
              style={{ marginRight: 8 }}
            >
              <Text>{time ? `${time.getHours()}:${time.getMinutes()}` : '--:--'}</Text>
            </InputDateField>
          )}
        </DatesView>


        {datePicker && (
          <InputDate
            value={date || new Date()}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}

        {timePicker && (
          <InputDate
            value={time || new Date(Date.now())}
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
          title={!isEdit ? "Cadastrar Refeição" : "Editar Refeição"}
          style={{ marginTop: 180, backgroundColor: '#333638' }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
