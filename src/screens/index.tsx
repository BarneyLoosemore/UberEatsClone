import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { Home } from "./Home";
import { Detail } from "./Detail";

const stackNavigator = createSharedElementStackNavigator(
  {
    Home,
    Detail
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      cardStyleInterpolator: ({ current: { progress: opacity } }) => {
        return { cardStyle: { opacity } };
      },
      gestureEnabled: false,
      cardStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);

export const AppContainer = createAppContainer(stackNavigator);
