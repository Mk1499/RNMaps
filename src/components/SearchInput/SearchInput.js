import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase
} from "react-native";

import { Container, ListItem, List, Item, Input, Icon } from "native-base";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      recommended: [],
      places: [
        {
          id: 1,
          name: "Nasr City",
          latitude: 30.056388,
          longitude: 31.36429
        },
        {
          id: 2,
          name: "Roxy",
          latitude: 30.092794,
          longitude: 31.314846
        },
        {
          id: 3,
          name: "Haram",
          latitude: 30.012568,
          longitude: 31.208041
        }
      ]
    };
  }

  _viewRecommended = text => {
    console.log("TEXT : ", text);
    console.log("Haram".search(text));
    let reg = new RegExp(text, "i");
    let result = this.state.places.filter(
      place => text != "" && place.name.match(reg) != null
    );
    // if (result.length>0)
    this.setState({
      recommended: result
    });
    console.log("Results : ", result);
  };

  render() {
    return (
      <View
        onPress={() => alert("frk")}
        style={[styles.searchInput, this.props.style]}
      >
        {/* <TextInput placeholder="Seach place here" 
          inlineImageLeft='search_icon'/> */}
        <Item>
          <Icon active name="search" />
          <Input
            placeholder="Seach Places Here"
            onChangeText={text => this._viewRecommended(text)}
          />
        </Item>
        <List>
          {this.state.recommended.length > 0
            ? this.state.recommended.map(suggest => (
                <ListItem key={suggest.id}>
                  <TouchableOpacity
                    style={styles.ListItem}
                    onPress={() => {
                        this.setState({recommended:[]})
                        this.props.changeLocation(suggest)}
                    }
                  >
                    <Text>{suggest.name}</Text>
                  </TouchableOpacity>
                </ListItem>
              ))
            : null}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13
  },
  ListItem: {
    width: "130%",
    height: 30,
    justifyContent: "center"
  }
});
