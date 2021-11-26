import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors';
import Decks from './Deck';
import SelectedDeck from './SelectedDeck';
import AddCard from './AddCard';
import StartQuiz from './StartQuiz';


const DeckStackContainer = createStackNavigator({
    SelectedDeck:{
        screen: SelectedDeck
    },
    AddCard: {
        screen: AddCard
    },
    StartQuiz: {
        screen: StartQuiz
    }

});

export default createAppContainer(DeckStackContainer);