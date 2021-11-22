import React from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddDeck extends React.Component {

    state = {
        question:'',
        answer: ''
    }

    handleOnChangeText(e) {
        this.setState({text:e})
        console.log('Text Value:', this.state.text)
    }
    render() {
        return(
            <View style={[appStyles.container, {justifyContent: "space-evenly", flex: 1}]}>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TextInput onChangeText={(e)=> this.handleOnChangeText(e)} value={this.state.question} style={{margin: 10}} placeholder="Question"/>
                    <TextInput onChangeText={(e)=> this.handleOnChangeText(e)} value={this.state.answer} style={{margin: 10}} placeholder="Answer"/>
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Button style={{ margin: 10, padding: 10 }} title="Create Deck" />
                </View>
            </View>
        )
    }

}

export default AddDeck;