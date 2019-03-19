import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./HomeScreen";
import OtherScreen from "./OtherScreen";
import SignInScreen from "./SignInScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
