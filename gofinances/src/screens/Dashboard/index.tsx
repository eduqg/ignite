import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  Header,UserWrapper, UserInfo, User, Photo, UserGreeting, UserName
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/17773211' }} />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Eduardo</UserName>
            </User>
          </UserInfo>


        </UserWrapper>
      </Header>
    </Container>
  )
}

export default Dashboard;

