import React from "react";
import { Text, View } from "react-native";

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: "OtherScreen"
  };

  render() {
    return (
      <View>
        <Text>OtherScreen</Text>
      </View>
    );
  }
}
