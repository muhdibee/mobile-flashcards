import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { appStyles } from '../appStylesheet/appStyles';
import DeckStack from './DeckStackContainer';


export default class DecksTab extends React.Component {
    render() {
        return (
            <View style={[appStyles.container, {justifyContent: 'center', flex: 1}]}>
                {/* <Text style={{flex: 1}}>Decks</Text> */}
                <DeckStack  noOfDEcks={5} style={{flex: 1}}/>
            </View>
        )
    }
}