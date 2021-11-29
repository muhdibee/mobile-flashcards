import React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray,red, black, blue, lightgray} from '../utils/colors'

class SelectedDeck extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const navigation = this.props.navigation;
        const decks = navigation.getParam('decks')
        const deckkey = navigation.getParam('deckkey')
        const selectedDeck = decks[deckkey]
        console.log(selectedDeck)

        return(
            <View style={[appStyles.container, {justifyContent: 'space-around', flex: 1}]}>
                <View style={[appStyles.container, {justifyContent: 'center', flex: 1}]}>
                    <Text style={{margin: 10}}> {selectedDeck.title}</Text>
                    <Text style={{margin: 10}}> {selectedDeck.questions.length} Card</Text>
                </View>
                <View style={[appStyles.container, {justifyContent: 'center' , flex: 1}]}>
                    <TouchableOpacity style={{ margin:10, paddingHorizontal:40, backgroundColor:blue, border:1, }} onPress={()=> navigation.navigate('AddCard')}   > <Text style={{ margin: 10, color: white}} >Add Card</Text></TouchableOpacity>
                    <TouchableOpacity style={{ margin:10, paddingHorizontal:40, backgroundColor:blue, border:1, }} onPress={()=> navigation.navigate('StartQuiz')} > <Text style={{ margin: 10, color: white}} >Start Quiz</Text></TouchableOpacity>
                    <TouchableOpacity >
                        <Text color={ red } style={{ margin: 10, color: red}} >Delete Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default SelectedDeck;