import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

import { useMemoOne } from "use-memo-one";
import { timing } from "react-native-redash";

import { RestaurantCardList } from "../components/RestaurantCardList/RestaurantCardList";
import { ImageGallery } from "../components/ImageGallery";
import { FilterBar } from "../components/FilterBar";
import { Sort } from "../components/Sort";
import { offers, restaurantCategories } from "../static/mocks";
import {
  HORIZONTAL_MARGIN,
  height as DEVICE_HEIGHT
} from "../constants/styles";

const { block, useCode, cond, set, interpolate, Value } = Animated;

const MIN = DEVICE_HEIGHT;
const MAX = 0;

export const Home = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const { translateY, open } = useMemoOne(
    () => ({ translateY: new Value(MIN), open: new Value<1 | 0>(0) }),
    []
  );

  const scale = interpolate(translateY, {
    inputRange: [MAX, MIN],
    outputRange: [0.9, 1]
  });

  const opacity = interpolate(translateY, {
    inputRange: [MAX, MIN],
    outputRange: [0.7, 1]
  });

  const rotateX = interpolate(translateY, {
    inputRange: [MAX, MIN],
    outputRange: [0.12, 0]
  });

  const borderRadius = interpolate(translateY, {
    inputRange: [MAX, MIN],
    outputRange: [15, 30]
  });

  useCode(
    () =>
      block([
        cond(
          open,
          set(
            translateY,
            timing({ from: MIN, to: MAX, easing: Easing.out(Easing.poly(2)) })
          )
        )
      ]),
    [open]
  );

  useEffect(() => {
    filter !== null && open.setValue(1);
  }, [filter]);

  return (
    <View style={styles.background}>
      <Animated.View
        style={{
          backgroundColor: "#EBEBEB",
          borderRadius,
          opacity,
          transform: [
            {
              perspective: 1000,
              rotateX,
              scale
            }
          ]
        }}>
        <Animated.ScrollView style={{ borderRadius }}>
          <FilterBar filter={filter} setFilter={setFilter} />

          <ImageGallery offers={offers} />
          <View style={{ marginTop: 50 }} />
          {restaurantCategories.map(({ title, restaurants }, index) => (
            <View key={index} style={styles.restaurantCategoryContainer}>
              <Text style={styles.restaurantCategoryTitle}>{title}</Text>
              <RestaurantCardList restaurants={restaurants} />
            </View>
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Sort translateY={translateY} />
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
