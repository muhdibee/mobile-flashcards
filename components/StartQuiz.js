import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'

class StartQuiz extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const navigation = this.props.navigation;

        return(
        <View style={[appStyles.container]}>
            <Text>StartQuiz View</Text>
        </View>
        )
    }

}

export default StartQuiz;