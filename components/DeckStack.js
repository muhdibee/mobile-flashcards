import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors';
import SelectedDeck from './SelectedDeck';
import AddCard from './AddCard';
import StartQuiz from './StartQuiz';


const DeckStack = createStackNavigator({
    SelectedDeck:{
        screen: SelectedDeck
    },
    AddCard: {
        screen: AddCard
    },
    StartQuiz: {
        screen: StartQuiz
    }

})

class Decks extends React.Component {

    render() {
        return(
        <View style={[appStyles.container]}>
            <Text>Deck 1</Text>
            <Text>2 Cards</Text>
        </View>
        )
    }

}

export default Decks;