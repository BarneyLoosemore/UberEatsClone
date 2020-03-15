import React from "react";
import { Animated, Easing } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
