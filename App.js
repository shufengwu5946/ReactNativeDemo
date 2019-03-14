/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import PizzaTranslator from "./components/TextInput";
import Touchables from "./components/Touchables";
import IScrolledDownAndWhatHappenedNextShockedMe from "./components/IScrolledDownAndWhatHappenedNextShockedMe";
import FlatListBasics from "./components/FlatListBasics";
import SectionListBasics from "./components/SectionListBasics";
import Weather from "./components/Weather";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    // return <FlexDirectionBasics />;
    // return <PizzaTranslator />;
    // return <Touchables/>
    // return <IScrolledDownAndWhatHappenedNextShockedMe />;
    // return <FlatListBasics/>
    // return <SectionListBasics/>
    return <Weather/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
