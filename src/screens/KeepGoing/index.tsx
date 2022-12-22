import React, { useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'react-native'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import successImg from '../../assets/person.png'
import failImg from '../../assets/pena.png'

import {
  Container,
  TextKeepGoing
} from './styles'

type RouteParams = {
  keep: boolean;
}

export function KeepGoing() {
  const route = useRoute();
  const navigation = useNavigation();

  const { keep } = route.params as RouteParams;

  const handleGoHome = useCallback(() => {
    navigation.navigate('home')
  }, [])

  return (
    <Container>
      <TextKeepGoing keep={keep}>{keep ? 'Continue assim!' : 'Que pena!'}</TextKeepGoing>

      <Image source={keep ? successImg : failImg} style={{ height: 288, width: 224 }} />

      <Button
        title="Ir para página inicial"
        style={{ marginTop: 32, backgroundColor: '#333638', paddingHorizontal: 32 }}
        onPress={handleGoHome}
      />
    </Container>
  )
}
