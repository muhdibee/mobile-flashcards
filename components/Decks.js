import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'

class Decks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navigation = this.props.navigation;

        return(
        <View  style={[appStyles.container, {justifyContent: 'space-around'}]}>
            <View onTouchStart={()=> navigation.navigate('SelectedDeck')}>
                <Text >Deck 1 </Text>
                <Text>2 Cards </Text>
            </View>
            <View>
                <Text>Deck 2 </Text>
                <Text>3 Cards </Text>
            </View>
            <View>
                <Text>Deck 3 </Text>
                <Text>6 Cards </Text>
            </View>
        </View>
        )

    }
}

export default Decks;