import React from "react";
import MyHomeScreen from "./MyHomeScreen";
import MyNotificationsScreen from "./MyNotificationsScreen";
import {
    createDrawerNavigator,
    createAppContainer,
  } from "react-navigation";

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;
