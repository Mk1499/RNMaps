import React, { Component } from 'react'
import { Text, View ,Dimensions,KeyboardAvoidingView} from 'react-native'; 

// import components
import MapView from '../../components/MapView/MapView';
import SearchInput from '../../components/SearchInput/SearchInput';


const { width: Width, height: Height } = Dimensions.get("window");


export default class Home extends Component {

    constructor(props){
        super(props); 
        this.state = {
            activeLocation : {
                 longitude:31.365040 , 
                 latitude:30.056536
            }
        }
    }

    changeLocation = (newLoc) => {
        this.setState({
            activeLocation: newLoc
        })
    }


    render() {
        return (
            <KeyboardAvoidingView>
                <SearchInput style={{
                    zIndex:40 ,
                    top:25,
                    alignSelf:'center',
                    position:'absolute',
                    width: 0.9*Width,
                }} 
                changeLocation = {this.changeLocation}
                />
                <MapView 
                  activeLocation = {this.state.activeLocation}  
                />
            </KeyboardAvoidingView>
        )
    }
}
