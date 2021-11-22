import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {white, gray, black, blue, lightgray} from './utils/colors'
import Decks from './Components/Decks';
import AddDeck from './Components/AddDeck';
import SelectedDeck from './Components/SelectedDeck';



const TabNavigator = createMaterialBottomTabNavigator(
  {
    SelectedDeck: {
    screen: SelectedDeck,
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
    initialRouteName: 'SelectedDeck',
    activeColor: white,
    inactiveColor: gray
  }
)

export default createAppContainer(TabNavigator);