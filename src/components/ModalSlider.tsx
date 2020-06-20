import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  onGestureEvent,
  useValues,
  snapPoint,
  timing,
} from "react-native-redash";
import { Ionicons } from "@expo/vector-icons";

import { height as DEVICE_HEIGHT } from "../constants/styles";

const { block, useCode, cond, and, eq, set, not, greaterOrEq } = Animated;

const TOP_OFFSET = 100;
const MIN = DEVICE_HEIGHT;
const MAX = 0;
const SNAP_BACK = DEVICE_HEIGHT / 2;

type ModalSliderProps = { translateY: Animated.Value<number> };

export const ModalSlider = ({ translateY }: ModalSliderProps) => {
  const [state, translationY, velocityY, shouldSnapBack] = useValues(
    [State.UNDETERMINED, 0, 0, 0],
    []
  );
  const gestureHandler = useMemoOne(
    () => onGestureEvent({ state, translationY, velocityY }),
    []
  );
  const snapTo = snapPoint(translationY, velocityY, [0, SNAP_BACK]);

  useCode(
    () =>
      block([
        cond(
          and(not(shouldSnapBack), eq(snapTo, SNAP_BACK), eq(state, State.END)),
          set(shouldSnapBack, 1)
        ),
        cond(
          shouldSnapBack,
          [
            set(shouldSnapBack, 0),
            set(
              translateY,
              timing({
                from: translateY,
                to: MIN,
                easing: Easing.out(Easing.poly(4)),
              })
            ),
          ],
          [
            cond(
              and(greaterOrEq(translateY, 0), eq(state, State.ACTIVE)),
              set(translateY, translationY)
            ),
            cond(
              eq(state, State.END),
              set(
                translateY,
                timing({
                  from: translateY,
                  to: MAX,
                  easing: Easing.out(Easing.poly(3)),
                })
              )
            ),
          ]
        ),
      ]),
    [translateY, shouldSnapBack]
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 999,
          backgroundColor: "white",
          borderRadius: 15,
          top: TOP_OFFSET,
          transform: [{ translateY }],
        }}>
        <TouchableOpacity
          style={{ position: "absolute", left: 20, top: 10 }}
          onPress={() => shouldSnapBack.setValue(1)}>
          <Ionicons name="ios-close" size={45} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 25,
            fontSize: 18,
            fontFamily: "airbnbMed",
            width: "100%",
            textAlign: "center",
          }}>
          Sort and filter
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
};
