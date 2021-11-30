import React from 'react';
import { View, Text, Button, Stylesheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appKey} from '../utils/helpers'
import { appStyles } from '../appStylesheet/appStyles';
import {white, gray, black, blue, lightgray} from '../utils/colors'



class AddDeck extends React.Component {

    state = {
        decks:'',
        newDeck: ''
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const fetchDecks=async()=> {
            try{
                await AsyncStorage.getItem(appKey)
                .then(result=> result!=null?  this.setState({decks:JSON.parse(result)}): console.log("Error in fetching Decks: ", e))
                .then(console.log("Loaded decks: ", this.state.decks))
            } catch(e){
                console.log("Error from componentDidMount: ", e)
            }
        }
        fetchDecks()
    }

    render() {

        // const navigtion = props.navigtion;
        var newDeck;

        const handleTextChange=(text)=>{
            newDeck = text
        }
        const handleSubmit = (newDeck) => {
            console.log(newDeck)
        }

        return(
            <View style={[appStyles.container, {justifyContent: "space-evenly", flex: 1}]}>{console.log("Loaded decks from render: ", this.state.decks)}
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <Text style={{margin: 10}}>What is the title of your new deck?</Text>
                    <TextInput onChangeText={(text)=> handleTextChange(text)} style={{margin: 10}} placeholder="Deck Title"/>
                </View>
                <View style={[appStyles.container, {justifyContent: "center", flex: 1}]}>
                    <TouchableOpacity style={{ margin: 10, padding: 10, marginHorizontal:30, backgroundColor: blue }} onPress={()=>handleSubmit(newDeck)}>
                        <Text style={{color: white}} >Create Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default AddDeck;