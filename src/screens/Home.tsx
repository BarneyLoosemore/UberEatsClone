import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Easing,
  Button
} from "react-native";
import Animated from "react-native-reanimated";
import {
  PanGestureHandler,
  TapGestureHandler,
  State,
  ScrollView
} from "react-native-gesture-handler";
import { useMemoOne } from "use-memo-one";
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

import { RestaurantCardList } from "../components/RestaurantCardList/RestaurantCardList";
import { ImageGallery } from "../components/ImageGallery";
import { FilterBar } from "../components/FilterBar";
import { Sort } from "../components/Sort";
import { images, restaurantCategories } from "../static/mocks";
import {
  HORIZONTAL_MARGIN,
  height as DEVICE_HEIGHT
} from "../constants/styles";

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
  diff,
  neq
} = Animated;

type HomeProps = {};

const TOP_OFFSET = 100;
const MIN = DEVICE_HEIGHT;
const MAX = 0;
const SNAP_BACK = DEVICE_HEIGHT / 2;

export const Home = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const open = new Value<0 | 1>(0);
  const transition = new Value(0);
  const translationY = new Value(0);
  // const transition = withTransition(open);

  const scale = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [1, 0.9]
  });

  const opacity = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [1, 0.7]
  });

  const rotateX = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, 0.1]
  });

  const gestureTransition = interpolate(translationY, {
    inputRange: [MAX, MIN],
    outputRange: [1, 0]
  });

  // set(transition, withTransition(open));
  // useCode(() => block([set(transition, withTransition(open))]), [open]);

  return (
    <View style={styles.background}>
      <Animated.View
        style={{
          backgroundColor: "#EBEBEB",
          borderRadius: 15,
          opacity,
          transform: [
            {
              perspective: 1000,
              rotateX,
              scale
            }
          ]
        }}>
        <ScrollView style={{ borderRadius: 15 }}>
          <FilterBar setFilter={setFilter} />

          <ImageGallery images={images} />
          <TouchableOpacity onPress={() => open.setValue(1)}>
            <Text style={{ fontSize: 35 }}>Toggle</Text>
          </TouchableOpacity>
          <Text>{filter}</Text>
          <View style={{ marginTop: 50 }} />
          {restaurantCategories.map(({ title, restaurants }, index) => (
            <View key={index} style={styles.restaurantCategoryContainer}>
              <Text style={styles.restaurantCategoryTitle}>{title}</Text>
              <RestaurantCardList restaurants={restaurants} />
            </View>
          ))}
        </ScrollView>
      </Animated.View>
      <Sort
        transition={transition}
        translationY={translationY}
        open={open}
        transition={transition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black"
  },
  restaurantCategoryContainer: {
    marginBottom: 30
  },
  restaurantCategoryTitle: {
    marginLeft: HORIZONTAL_MARGIN,
    fontSize: 24,
    fontFamily: "transport"
  }
});
