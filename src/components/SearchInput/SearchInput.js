import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity , Keyboard} from "react-native";
import { ListItem, List, Item, Input, Icon } from "native-base";

import { connect } from "react-redux";
import { changeLocation } from "../../actions/MapActions";
import { viewRecommended, emptyRecommended } from "../../actions/SearchActions";

import { bindActionCreators } from "redux";

class SearchInput extends Component {
  render() {
    console.log("Props : ", this.props);

    return (
      <View style={[styles.searchInput, this.props.style]}>
       
        <Item>
          <Icon active name="search" />
          <Input
            placeholder={this.props.LanguageReducer.language == "AR" ? "ابحث عن الاماكن هنا": "Search places Here"}
            onChangeText={text => this.props.viewRecommended(text)}
          />
        </Item>
        <List>
          {this.props.SearchReducer.recommended.length > 0
            ? this.props.SearchReducer.recommended.map(suggest => (
                <ListItem key={suggest.id}>
                  <TouchableOpacity
                    style={styles.ListItem}
                    onPress={() => {
                      Keyboard.dismiss();
                      this.props.emptyRecommended();
                      this.props.changeLocation(suggest);
                    }}
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
const mapStateToProps = state => {
  const { MapReducer, SearchReducer, LanguageReducer } = state;
  return { MapReducer, SearchReducer, LanguageReducer };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeLocation,
      viewRecommended,
      emptyRecommended
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
