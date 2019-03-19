import React from "react";
import { StatusBar, Button, Text, SafeAreaView, Platform } from "react-native";

export default class Screen2 extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      console.log("Screen2");
      StatusBar.setBarStyle("dark-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#ecf0f1");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <SafeAreaView style={[{ backgroundColor: "#ecf0f1" }]}>
        {/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
        <Text>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </SafeAreaView>
    );
  }
}
