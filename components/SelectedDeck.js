import React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'

class SelectedDeck extends React.Component {

    render() {
        return(
        <View style={[appStyles.container, {justifyContent: 'space-around', flex: 1}]}>
            <View style={[appStyles.container, {justifyContent: 'center', flex: 1}]}>
                <Text style={{margin: 10}}>{'Deck 1'}</Text>
                <Text style={{margin: 10}}>{'2'} cards</Text>
            </View>
            <View style={[appStyles.container, {justifyContent: 'center', flex: 1}]}>
                <Button color={blue} style={{ paddingVertical: 10, paddingHorizontal: 30}} title='Add Card' />
                <Button color={blue} style={{ paddingVertical: 10, paddingHorizontal: 30, marginVertical: 30}} title='Start Quiz' />
                <Text style={{ padding: 10, margin: 10}} >Delete Deck</Text>
            </View>
        </View>
        )
    }

}

export default SelectedDeck;