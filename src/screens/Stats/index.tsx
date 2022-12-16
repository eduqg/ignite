import { useState, useCallback } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import {
  Container,
  SectionText,
  Content,

  ListStats,
  ItemStatus,
  ItemStatusTitle,
  ItemStatusSubtitle

} from './styles';
import { Loading } from '@components/Loading';
import { Meal } from 'src/@types/Meal';
import { Subtitle, Title } from '@components/Percentage/styles';
import { BackButton, BackIcon } from '@components/Header/styles';
import { Container as PercentageArrow } from '@components/Percentage/styles'


export function Stats() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([{
    date: '20:00',
    name: 'X-tudo'
  }, { date: '16:00', name: 'Lasanha de frango com queijo' }]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  function handleNewMeal() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      // const data = await groupsGetAll();
      // setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error);
    } finally {
      setIsLoading(false);
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
          {Number(90).toFixed(2)}
        </Title>

        <Subtitle>
          das refeições dentro da dieta
        </Subtitle>
      </PercentageArrow>

      <Content>
        <SectionText>Estatísticas gerais</SectionText>

        <ItemStatus style={{ backgroundColor: '#EFF0F0' }}>
          <ItemStatusTitle>22</ItemStatusTitle>
          <ItemStatusSubtitle>melhor sequência de pratos dentro da dieta</ItemStatusSubtitle>
        </ItemStatus>

        <ItemStatus style={{ backgroundColor: '#EFF0F0' }}>
          <ItemStatusTitle>109</ItemStatusTitle>
          <ItemStatusSubtitle>refeições registradas</ItemStatusSubtitle>
        </ItemStatus>

        <ListStats>
          <ItemStatus style={{
            width: 165,
            backgroundColor: '#E5F0DB',
          }}>
            <ItemStatusTitle>99</ItemStatusTitle>
            <ItemStatusSubtitle>refeições dentro da {'\n'} dieta</ItemStatusSubtitle>
          </ItemStatus>

          <ItemStatus style={{
            width: 165,
            backgroundColor: '#F4E6E7',
          }}>
            <ItemStatusTitle>99</ItemStatusTitle>
            <ItemStatusSubtitle>refeições fora da {'\n'} dieta</ItemStatusSubtitle>
          </ItemStatus>
        </ListStats>
      </Content >
    </Container>
  );
}