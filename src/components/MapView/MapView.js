import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput } from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";

const { width: Width, height: Height } = Dimensions.get("window");
export default class CustomMapView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          {/* <Text>MAP</Text> */}
        </View>
        <MapView
         
          style={styles.map}
          initialRegion={{
            latitude: this.props.activeLocation.latitude,
            longitude: this.props.activeLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }} 
          region = {new AnimatedRegion({
            latitude: this.props.activeLocation.latitude,
            longitude: this.props.activeLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          })}
        >
          <Marker
            coordinate = {this.props.activeLocation}
            onPress = {() => alert("Clicked ")}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    zIndex:1
  },
  map: {
    width: Width,
    height: Height
  }
});
