import React from "react";
import { StatusBar, Button, Text, SafeAreaView, Platform } from "react-native";

export default class Screen1 extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      console.log("Screen1");
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#6a51ae");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <SafeAreaView style={[{ backgroundColor: "#6a51ae" }]}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
        <Text style={[{ color: "#fff" }]}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </SafeAreaView>
    );
  }
}
