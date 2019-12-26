import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// import external screens
import Home from './src/screens/Home/Home';

const { width: Width, height: Height } = Dimensions.get("window");

export default class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
//  flex: 1,
//     justifyContent: "center",
//     alignItems: "center"   
  }
});
