import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Subtitle, Title } from '@components/Percentage/styles';
import { BackButton, BackIcon } from '@components/Header/styles';
import { Container as PercentageArrow } from '@components/Percentage/styles'
import { mealsGetStats, MealStats } from '@storage/meal/mealsGetStats';

import {
  Container,
  SectionText,
  Content,
  ListStats,
  ItemStatus,
  ItemStatusTitle,
  ItemStatusSubtitle

} from './styles';

export function Stats() {
  const [stats, setStats] = useState<MealStats | undefined>(undefined);

  const navigation = useNavigation();

  async function fetchGroups() {
    try {
      const data = await mealsGetStats();
      setStats(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as estatísticas');
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  function handleGoBack() {
    navigation.navigate('home')
  }


  return (
    <Container>
      <PercentageArrow style={{ paddingTop: 40, paddingBottom: 32 }}>
        <BackButton
          onPress={handleGoBack}
          style={{
            position: 'absolute',
            top: 40,
            left: 20
          }}>
          <BackIcon />
        </BackButton>

        <Title>
          {stats && `${((stats.mealsInsideDiet * 100) / stats.mealsNumber).toFixed(2)}%`}
        </Title>

        <Subtitle>
          das refeições dentro da dieta
        </Subtitle>
      </PercentageArrow>

      <Content>
        <SectionText>Estatísticas gerais</SectionText>

        <ItemStatus style={{ backgroundColor: '#EFF0F0' }}>
          <ItemStatusTitle>{stats?.bestSequence}</ItemStatusTitle>
          <ItemStatusSubtitle>melhor sequência de pratos dentro da dieta</ItemStatusSubtitle>
        </ItemStatus>

        <ItemStatus style={{ backgroundColor: '#EFF0F0' }}>
          <ItemStatusTitle>{stats?.mealsNumber}</ItemStatusTitle>
          <ItemStatusSubtitle>refeições registradas</ItemStatusSubtitle>
        </ItemStatus>

        <ListStats>
          <ItemStatus style={{
            width: 165,
            backgroundColor: '#E5F0DB',
          }}>
            <ItemStatusTitle>{stats?.mealsInsideDiet}</ItemStatusTitle>
            <ItemStatusSubtitle>refeições dentro da {'\n'} dieta</ItemStatusSubtitle>
          </ItemStatus>

          <ItemStatus style={{
            width: 165,
            backgroundColor: '#F4E6E7',
          }}>
            <ItemStatusTitle>{stats?.mealsOutsideDiet}</ItemStatusTitle>
            <ItemStatusSubtitle>refeições fora da {'\n'} dieta</ItemStatusSubtitle>
          </ItemStatus>
        </ListStats>
      </Content >
    </Container>
  );
}