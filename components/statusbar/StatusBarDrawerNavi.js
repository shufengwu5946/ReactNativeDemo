import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

export default createAppContainer(
    createDrawerNavigator(
    {
      Screen1: {
        screen: Screen1
      },
      Screen2: {
        screen: Screen2
      }
    }
  )
);
