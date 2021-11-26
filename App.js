import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {white, gray, black, blue, lightgray} from './utils/colors'
import DecksTab from './components/DecksTab';
import SelectedDeck from './Components/SelectedDeck';
import AddDeck from './Components/AddDeck';
import AddCard from './Components/AddCard';
import DeckStack from './Components/DeckStackContainer';


const RootTabNavigator = createMaterialBottomTabNavigator(
  {
    DeckStack: {
    screen: DeckStack,
    navigationOptions:{
      tabBarIcon: ({}) => (<View><Ionicon size={22} style={{}} name={'layers'} /></View>)
    }
  },
    AddDeck: {
      screen: AddDeck,
      navigationOptions:{
        tabBarIcon: ({}) => (<View><Ionicon size={22} style={{}} name={'duplicate'} /></View>)
      }
    }
  },
  {
    initialRouteName: 'DeckStack',
    activeColor: white,
    inactiveColor: gray
  }
)

export default createAppContainer(RootTabNavigator);