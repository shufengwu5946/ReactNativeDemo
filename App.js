/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import PizzaTranslator from "./components/TextInput";
import Touchables from "./components/Touchables";
import IScrolledDownAndWhatHappenedNextShockedMe from "./components/IScrolledDownAndWhatHappenedNextShockedMe";
import FlatListBasics from "./components/FlatListBasics";
import SectionListBasics from "./components/SectionListBasics";
import Weather from "./components/Weather";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    // return <FlexDirectionBasics />;
    // return <PizzaTranslator />;
    // return <Touchables/>
    // return <IScrolledDownAndWhatHappenedNextShockedMe />;
    // return <FlatListBasics/>
    // return <SectionListBasics/>
    return <AppContainer />;
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
