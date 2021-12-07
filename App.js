import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { NavigationContainer } from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {white, gray} from './utils/colors'
import DeckStack from './components/DeckStack';
import AddDeck from './components/AddDeck';
import { Provider } from 'react-redux';


const RootTabNavigator = createMaterialBottomTabNavigator(
  {
    Decks: {
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
    initialRouteName: '',
    activeColor: white,
    inactiveColor: gray
  }
)

const MyNavigator = createAppContainer(RootTabNavigator);



 const App = () => {
   return(
    //  <Provider >
       <MyNavigator />
    //  </Provider>
   )
}

export default App;