import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { appStyles } from '../appStylesheet/appStyles';


class AddDeck extends React.Component {

    render() {
        return(
        <View style={appStyles.container}>
            <Text>AddDeck View</Text>
        </View>
        )
    }

}

export default AddDeck;