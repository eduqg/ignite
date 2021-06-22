import React from 'react';
import HighlightCard from '../../components/HighlightCard'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
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

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}

export default Dashboard;

