import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { appStyles } from '../appStylesheet/appStyles';

class Decks extends React.Component {

    render() {
        return(
        <View style={appStyles.container}>
            <Text>Decks View</Text>
        </View>
        )
    }

}

export default Decks;