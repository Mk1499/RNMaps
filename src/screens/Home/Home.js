import React, { Component } from "react";
import { Text, View, Dimensions, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

// import components
import MapView from "../../components/MapView/MapView";
import SearchInput from "../../components/SearchInput/SearchInput";

const { width: Width, height: Height } = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <SearchInput
          style={{
            zIndex: 40,
            top: 25,
            alignSelf: "center",
            position: "absolute",
            width: 0.9 * Width
          }}
        />
        <MapView />
      </KeyboardAvoidingView>
    );
  }
}

// const mapStateToProps = state => {
//   const { mapReducer } = state;
//   return { mapReducer };
// };

// export default connect(mapStateToProps)(Home);
