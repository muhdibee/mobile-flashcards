import React from 'react';
import { View, Text, TouchableOpacity, Button, Stylesheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddCard extends React.Component {
    constructor(props) {
        super(props);
    }
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
        const navigation = this.props.navigation;
        return(
            <View style={[ appStyles.container, { justifyContent: "space-evenly", flex: 1 } ]}>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TextInput onChangeText={(e)=> this.handleQuestion(e)} value={this.state.question} style={{margin: 10}} placeholder="Question"/>
                    <TextInput onChangeText={(e)=> this.handleAnswer(e)} value={this.state.answer} style={{margin: 10}} placeholder="Answer"/>
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TouchableOpacity style={{  paddingHorizontal:40, backgroundColor: blue }}>
                        <Text style={{color: white, margin:10}} >Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default AddCard;