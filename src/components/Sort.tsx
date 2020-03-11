import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import Animated from "react-native-reanimated";
import {
  PanGestureHandler,
  TapGestureHandler,
  State,
  ScrollView
} from "react-native-gesture-handler";
import {
  onGestureEvent,
  useValues,
  snapPoint,
  timing,
  delay,
  useTimingTransition,
  useSpringTransition,
  withTransition,
  withSpringTransition,
  bInterpolate,
  panGestureHandler
} from "react-native-redash";

import { RestaurantDetail } from "./RestaurantDetail/RestaurantDetail";
import { restaurants } from "../static/mocks";
import { height as DEVICE_HEIGHT } from "../constants/styles";

const {
  block,
  useCode,
  cond,
  call,
  and,
  eq,
  set,
  not,
  interpolate,
  Extrapolate,
  Value,
  onChange,
  acc,
  neq,
  diff
} = Animated;

const TOP_OFFSET = 100;
const MIN = DEVICE_HEIGHT;
const MAX = 0;
const SNAP_BACK = DEVICE_HEIGHT / 2;

// type HomeProps = { open: Animated};

export const Sort = ({
  transition,
  translationY,
  open
  // transition: initialTransition
}) => {
  const [state, velocityY] = useValues([State.UNDETERMINED, 0], []);
  const translateY = bInterpolate(transition, MIN, MAX);

  const gestureHandler = onGestureEvent({ state, translationY, velocityY });
  const gestureTransition = interpolate(translationY, {
    inputRange: [MAX, MIN],
    outputRange: [1, 0]
  });

  useCode(
    () =>
      block([
        cond(
          and(open, neq(diff(open), 1), set(transition, withTransition(open))),
          cond(eq(state, State.ACTIVE), [set(transition, gestureTransition)])
        )

        // eq(open, 1)

        // cond(eq(state, State.ACTIVE), [set(transition, gestureTransition)]),
        // cond(eq(state, State.END), [
        //   set(transition, timing({ from: translateY, to: 0 }))
        // ])
      ]),
    [open, state, transition]
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 999,
          backgroundColor: "grey",
          borderRadius: 15,
          top: TOP_OFFSET,
          transform: [{ translateY }]
        }}
      />
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({});
