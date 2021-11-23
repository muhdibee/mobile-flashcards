import React from 'react';
import { View, Text, Button, Stylesheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddCard extends React.Component {

    state = {
        question:'',
        answer: ''
    }

    handleQuestion(e) {
        this.setState({ question:e })
        console.log('Text Value:', this.state.question)
    }

    handleAnswer(e) {
        this.setState({ answer:e })
        console.log('Text Value:', this.state.answer)
    }
    render() {
        return(
            <View style={[ appStyles.container, { justifyContent: "space-evenly", flex: 1 } ]}>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TextInput onChangeText={(e)=> this.handleQuestion(e)} value={this.state.question} style={{margin: 10}} placeholder="Question"/>
                    <TextInput onChangeText={(e)=> this.handleAnswer(e)} value={this.state.answer} style={{margin: 10}} placeholder="Answer"/>
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Button color={blue} style={{ margin: 10, padding: 10 }} title="Submit" />
                </View>
            </View>
        )
    }

}

export default AddCard;