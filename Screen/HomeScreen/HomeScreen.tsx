/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button/Button';
import {
  BottomTap,
  Container,
  FooterTab,
  Paragraph,
  Title,
  IconDiv,
  TopView,
} from './HomeScreen.styles';

function HomeScreen() {
  return (
    <Container>
      <TopView>
        <Text
          style={{
            fontFamily: 'Yellowtail-Regular',
            fontSize: 30,
            padding: 0,
            margin: 0,
          }}>
          D
        </Text>
      </TopView>
      <FooterTab>
        <BottomTap>
          <IconDiv>
            <Icon name="rocket" size={30} color="#900" />
          </IconDiv>
          <Title>Non-Contact Deliveries</Title>
          <Paragraph>
            When placing an order, select the option "Contactless delivery" and
            the courier will leave your order at the door
          </Paragraph>
          <Button
            block
            onPress={() => Alert.alert('You just ordered!')}
            textColor="#fff">
            ORDER NOW
          </Button>
          <Button
            onPress={() => Alert.alert('You just Dismissed')}
            textColor="#000">
            DISMISS
          </Button>
        </BottomTap>
      </FooterTab>
    </Container>
  );
}

export default HomeScreen;
