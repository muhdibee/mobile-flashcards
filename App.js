import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {white, gray, black, blue, lightgray} from './utils/colors'
import Decks from './Components/Decks';
import AddDeck from './Components/AddDeck';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Decks: {
    screen: Decks,

  },
    AddDeck: {
      screen: AddDeck
    }
  },
  {
    initialRouteName: 'Decks',
    activeColor: gray,
    inactiveColor: blue
  }
)

export default createAppContainer(TabNavigator);