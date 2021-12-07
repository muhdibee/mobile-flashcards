import React from 'react';
import { View, Text, Stylesheet,FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appStyles } from '../appStylesheet/appStyles';
import {appKey} from '../utils/helpers'
import {white, gray, black, blue, lightgray} from '../utils/colors'
import {initialAppData} from '../utils/helpers'

const DeckView = ({ deckkey, deckValue, navigation})=> {
    const calc= ['1','2','3']
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('SelectedDeck', {deckkey:deckkey ,deckValue:deckValue})} >
            <Text>{deckkey}</Text>
            <Text>{deckValue}</Text>{console.log("DeckValue",deckValue)}

            {/* <Text>{deckValue.questions.length} Cards </Text> */}
        </TouchableOpacity>
    )

}


class Decks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            decks:''
        }
    }

    componentDidMount() {

       const setAppData = async (initialAppData) => {
            try {
                await AsyncStorage.setItem(appKey, JSON.stringify(initialAppData))
                .then(result => this.setState({decks:result}))
                .then( console.log('Set data succesfull'))
            } catch(e) {
                console.log("Error in setAppData function: ", e)
            }
        }
        const getData = async () => {
            try {
              await AsyncStorage.getItem(appKey)
              .then(result => result!=null ?this.setState({decks:JSON.parse(result)}): setAppData(initialAppData)  )
              .then(console.log('Get data succesful'))
            } catch(e) {
                console.log("Error in getData function: ", e)
            }
          }
          getData();
          console.log("AppData from Component did mount: ", this.state.decks);
    }

    render() {
        const {decks} = this.state
        if (decks !=''){
            console.log("AppData from render: ", decks)
            // console.log("data key: ", decks[deckkeys][0])
            const navigation = this.props.navigation;

            return(
            <View style={[appStyles.container, {justifyContent: 'space-around'}]}>
                

                    { Object.keys(decks).map( (deckkey)=> (
                        <TouchableOpacity key={deckkey} style={{marginVertical:5, borderRadius: 2, backgroundColor: lightgray}} onPress={()=> navigation.navigate('SelectedDeck', {decks:decks, deckkey:deckkey})}>
                            <Text style={{margin:3, marginHorizontal: 10}}>{decks[deckkey].title}</Text>
                            <Text style={{margin:3, marginHorizontal: 10}}>{decks[deckkey].questions.length} Cards</Text>
                        </TouchableOpacity>
                    ))}
                {/* <DeckView key={deckkey} deckkey={deckkey} decks={deckValue}  navigation={navigation} /> */}
                {/* <FlatList data={decks} renderItem={DeckView} keyExtractor={item=> item.key} decks={decks} navigation={navigation} /> */}
            </View>
            )
        } return <View><Text>Rerun the app and give permission to  store data</Text></View>
    }

}


export default Decks;
