import { Header } from '@components/Header'
import React from 'react'
import { Text, View } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealRemove } from '@storage/meal/mealRemove'
import { ButtonIcon } from '@components/ButtonIcon'

import {
  Container,
  Content,
  TextInput,
  ViewYesNo,
  LabelYes
} from './styles'

type RouteParams = {
  meal: MealStorageDTO;
}

export function ViewMeal() {
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as RouteParams;

  async function handleEdit() {
    navigation.navigate('newmeal', { isEdit: true, meal });

  }

  async function handleRemove() {
    await mealRemove(meal)
    navigation.navigate('home');
  };


  return (
    <Container inside={meal.insideDiet}>

      <Header showBackButton title='Refeição' />

      <Content>
        <TextInput style={{ fontSize: 20 }}>{meal.name}</TextInput>
        <TextInput style={{ fontWeight: '400' }}>{meal.description}</TextInput>
        <TextInput>Data e hora</TextInput>
        <TextInput style={{ fontWeight: '400' }}>{
          meal.date +
          ' ' +
          new Date(meal.time).getHours()}:{new Date(meal.time).getMinutes()
          }</TextInput>

        <TextInput>Está dentro da dieta?</TextInput>

        <ViewYesNo>

          <LabelYes>
            <View style={{ backgroundColor: meal.insideDiet ? '#639339' : '#BF3B44', height: 8, width: 8, borderRadius: 4 }} />
            <Text style={{ marginLeft: 8 }}>{meal.insideDiet ? 'Dentro da dieta' : 'Fora da dieta'}</Text>
          </LabelYes>
        </ViewYesNo>


        <ButtonIcon
          title="Editar refeição"
          icon="edit"
          onPress={handleEdit}
          style={{
            marginTop: 240,
            backgroundColor: '#333638',
          }}
        />

        <ButtonIcon
          title="Excluir refeição"
          icon="close"
          type="SECONDARY"
          onPress={handleRemove}
          style={{
            marginTop: 8,
          }}
        />
      </Content>
    </Container>
  )
}
