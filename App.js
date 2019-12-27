import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import { Provider } from "react-redux";
import store from './store';

// import external screens
import Home from "./src/screens/Home/Home";

const { width: Width, height: Height } = Dimensions.get("window");

export default class App extends Component {
  constructor() {
    super();
    console.log(store.getState());
    
  }
  
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
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
