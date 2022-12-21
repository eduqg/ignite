import { useState, useCallback } from 'react';
import { Alert, FlatList, Text } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, SectionText, GroupText, Content } from './styles';
import { Loading } from '@components/Loading';
import { Meal } from 'src/@types/Meal';

export function Home() {
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
    navigation.navigate('newmeal');
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

  function handleOpenGroup(group: string) {
    // navigation.navigate('players', { group })
  }

  function handleOpenMeal(meal: Meal) {
    navigation.navigate('meals', { meal })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  function handleOpenStats() {
    navigation.navigate('stats')
  }

  return (
    <Container>
      <Header />
      
      <Content>
        <Percentage
          value={90}
          subtitle="das refeições dentro da dieta"
          onPress={handleOpenStats}
        />

        <SectionText>Refeições</SectionText>

        <Button
          title='Nova refeição'
          onPress={handleNewMeal}
          style={{ backgroundColor: '#333638' }}
        />

        <GroupText>12.08.22</GroupText>

        {
          isLoading ? <Loading /> :
            <FlatList
              data={meals}
              keyExtractor={item => item.name + item.date}
              style={{ paddingTop: 16, paddingBottom: 16 }}
              renderItem={({ item }) => (
                <GroupCard
                  title={item.name}
                  date={item.date}
                  onPress={() => handleOpenMeal(item)}
                />
              )}
              contentContainerStyle={meals.length === 0 && { flex: 1 }}
              ListEmptyComponent={() => (
                <ListEmpty message="Que tal cadastrar a primeira turma?" />
              )}
            />
        }

      </Content>
    </Container>
  );
}