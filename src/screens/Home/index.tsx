import { useState, useCallback } from 'react';
import { Alert, FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Percentage } from '@components/Percentage';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { mealsGetAll } from '@storage/meal/mealsGetAll';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { MealByDateStorageDTO } from '@storage/meal/MealsByDateStorageDTO';
import { MEAL_COLLECTION } from '@storage/storageConfig';

import { Container, SectionText, GroupText, Content } from './styles';
import { mealsGetStats, MealStats } from '@storage/meal/mealsGetStats';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealByDateStorageDTO[]>([]);
  const [stats, setStats] = useState<MealStats | undefined>(undefined);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('newmeal', { isEdit: false });
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await mealsGetAll();
      setMeals(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchStats() {
    try {
      const data = await mealsGetStats();
      setStats(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar os status');
    } finally {
    }
  }

  function handleOpenMeal(meal: MealStorageDTO) {
    navigation.navigate('meals', { meal })
  }

  async function clearMeals() {
    await AsyncStorage.removeItem(MEAL_COLLECTION)
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
    fetchStats()
    // clearMeals()
  }, []))

  function handleOpenStats() {
    navigation.navigate('stats')
  }

  return (
    <Container>
      <Header />

      <Content>
        {stats && <Percentage
          value={`${((stats.mealsInsideDiet * 100) / stats.mealsNumber).toFixed(2)}%`}
          subtitle="das refeições dentro da dieta"
          onPress={handleOpenStats}
        />}

        <SectionText>Refeições</SectionText>

        <Button
          title='Nova refeição'
          onPress={handleNewMeal}
          style={{ backgroundColor: '#333638' }}
        />


        {
          isLoading ? <Loading /> :
            meals && meals.map((mealDate) => (
              <View key={mealDate.date}>
                <GroupText>{mealDate.date}</GroupText>

                <FlatList
                  data={mealDate.meals}
                  keyExtractor={item => item.id}
                  style={{ paddingTop: 16, paddingBottom: 16 }}
                  renderItem={({ item }) => (
                    <GroupCard
                      meal={item}
                      onPress={() => handleOpenMeal(item)}
                    />
                  )}
                  contentContainerStyle={meals.length === 0 && { flex: 1 }}
                  ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar a primeira turma?" />
                  )}
                />
              </View>
            ))
        }

      </Content>
    </Container>
  );
}