/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";
import FlexDirectionBasics from "./components/FlexDirectionBasics";
import PizzaTranslator from "./components/TextInput";
import Touchables from "./components/Touchables";
import IScrolledDownAndWhatHappenedNextShockedMe from "./components/IScrolledDownAndWhatHappenedNextShockedMe";
import FlatListBasics from "./components/FlatListBasics";
import SectionListBasics from "./components/SectionListBasics";
import Weather from "./components/Weather";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  NavigationEvents
} from "react-navigation";
import FadeInView from "./components/FadeInView";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { Icon } from 'antd';
import HomeIconWithBadge from "./components/HomeIconWithBadge";
import MyApp from "./components/drawerNavi/MyApp";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home",
      headerRight: (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
          color="#000000"
        />
      )
    };

    // headerStyle: {
    //   backgroundColor: "#0000ff"
    // },
    // headerTintColor: "#fff",
    // headerTitleStyle: {
    //   fontWeight: "bold"
    // }
  };

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    // 添加监听
    this.didBlurSubscription = this.props.navigation.addListener(
      "didFocus",
      () => {
        // console.log(obj);
        //Alert.alert("didFocus");
      }
    );

    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  componentWillUnmount() {
    // 移除监听
    this.didBlurSubscription.remove();
  }

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
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "#ff00ff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentDidMount() {
    // 添加监听
    // this.didBlurSubscription = this.props.navigation.addListener(
    //   "didFocus",
    //   obj => {
    //     // console.log(obj);
    //     Alert.alert("didFocus");
    //   }
    // );
  }

  componentWillUnmount() {
    // 移除监听
    // this.didBlurSubscription.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <NavigationEvents
          onWillFocus={() => Alert.alert("will focus")}
          onDidFocus={() => Alert.alert("did focus")}
          onWillBlur={() => Alert.alert("will blur")}
          onDidBlur={() => Alert.alert("did blur")}
        /> */}
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

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0000ff"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!"
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00ff00"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    mode: "modal",
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavigationChange = this.handleNavigationChange.bind(this);
  }

  handleNavigationChange(prevState, newState, action) {
    // Alert.alert(`${prevState} ${newState} ${action}`);
  }

  render() {
    // return <FlexDirectionBasics />;
    // return <PizzaTranslator />;
    // return <Touchables/>
    // return <IScrolledDownAndWhatHappenedNextShockedMe />;
    // return <FlatListBasics/>
    // return <SectionListBasics/>
    // return <AppContainer />;
    // return (
    //   <FadeInView style={{ flex: 1, backgroundColor: "powderblue" }}>
    //     <AppContainer onNavigationStateChange={this.handleNavigationChange} />
    //   </FadeInView>
    // );
    return <MyApp />;
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
