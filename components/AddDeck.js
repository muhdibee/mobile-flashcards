import React from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddDeck extends React.Component {

    state = {
        text:''
    }
    handleOnChangeText(e) {
        this.setState({text:e})
        console.log('Text Value:', this.state.text)
    }
    render() {
        return(
            <View style={[appStyles.container, {justifyContent: "space-evenly", flex: 1}]}>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Text style={{margin: 10}}>What is the title of your new deck?</Text>
                    <TextInput onChangeText={(e) => this.handleOnChangeText(e)} style={{margin: 10}} />
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Button style={{ margin: 10, padding: 10 }} title="Create Deck" />
                </View>
            </View>
        )
    }

}

export default AddDeck;