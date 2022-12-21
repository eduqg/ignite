import { Header } from '@components/Header'
import React, { useState } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'

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
import { useNavigation, useRoute } from '@react-navigation/native'
import { Meal } from '../../@types/Meal'

type RouteParams = {
  meal: Meal;
}

export function ViewMeal() {
  const navigation = useNavigation();
  const route = useRoute();

  const { meal } = route.params as RouteParams;
  const [insideDiet, setInsideDiet] = useState(false);


  async function handleNew() {
    navigation.navigate('keepgoing', { keep: insideDiet });

  }

  function handleRemove() {
  };



  function handleSetInsideDiet(value: boolean) {
    setInsideDiet(value);
  };


  return (
    <Container inside={false}>

      <Header showBackButton title='Refeição' />

      <Content>
        <TextInput>{meal.name}</TextInput>
        <TextInput>{meal.date}</TextInput>

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
          title="Editar refeição"
          style={{
            marginTop: 16,
            backgroundColor: '#333638'
          }}
          onPress={handleNew}
        />

        <Button
          title="Excluir refeição"
          style={{
            marginTop: 8,
            backgroundColor: '#333',
          }}
          onPress={handleRemove}
        />
      </Content>
    </Container>
  )
}
