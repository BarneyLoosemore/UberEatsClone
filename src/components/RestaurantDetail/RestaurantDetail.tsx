import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated as VanillaAnimated,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation, useIsFocused } from "react-navigation-hooks";
import Animated from "react-native-reanimated";
import {
  PanGestureHandler,
  State,
  ScrollView,
} from "react-native-gesture-handler";
import { useMemoOne } from "use-memo-one";
import {
  onGestureEvent,
  useValues,
  snapPoint,
  timing,
} from "react-native-redash";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import {
  width as FULL_WIDTH,
  height as HEIGHT,
  HORIZONTAL_MARGIN,
  HEADER_IMAGE_HEIGHT,
} from "../../constants/styles";
import { Layout } from "../common/Layout";
import { Flex } from "../common/Flex";
import { Rating } from "../Rating";

import { Category } from "./Category";

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
  multiply,
  pow,
} = Animated;

const SNAP_BACK = HEIGHT / 2;

type RestaurantDetailProps = {
  id: number;
  title: string;
  attributes?: string[];
  rating?: number;
  distance?: number;
  imageUrl: string;
  location: string;
  deliveryFee?: string;
  categories: {
    id: number;
    name: string;
    dishes: {
      id: number;
      name: string;
      description: string;
      price: string;
      imageUrl?: string;
    }[];
  }[];
};

const Divider = () => <View style={styles.divider} />;

export const RestaurantDetail = ({
  id,
  title,
  attributes,
  rating,
  distance,
  imageUrl,
  location,
  deliveryFee,
  categories,
}: RestaurantDetailProps) => {
  const { goBack } = useNavigation();
  const isFocused = useIsFocused();
  const [liked, setLiked] = useState<boolean>(false);
  const [enableGesture, setEnableGesture] = useState<boolean>(true);
  const scrollRef = useRef<ScrollView>(null);
  const gestureHandlerRef = useRef<PanGestureHandler>(null);

  const gradientOpacity = new VanillaAnimated.Value(0);

  useEffect(() => {
    if (isFocused) {
      VanillaAnimated.timing(gradientOpacity, {
        toValue: 1,
        duration: 200,
        delay: 1000,
      }).start();
    }

    if (!isFocused) {
      VanillaAnimated.timing(gradientOpacity, {
        toValue: 0,
        duration: 1000,
      }).start();
    }
  }, [isFocused]);

  const onScroll = ({ nativeEvent }) => {
    if (nativeEvent.contentOffset.y <= 0 && !enableGesture) {
      setEnableGesture(true);
    }
    if (nativeEvent.contentOffset.y > 0 && enableGesture) {
      setEnableGesture(false);
    }
  };
  const [
    translationX,
    translationY,
    velocityY,
    state,
    translateX,
    translateY,
    shouldSnapBack,
  ] = useValues([0, 0, 0, State.UNDETERMINED, 0, 0, 0], []);
  const snapTo = snapPoint(translationY, velocityY, [0, SNAP_BACK]);
  const scale = interpolate(translateY, {
    inputRange: [0, SNAP_BACK],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });

  const gestureHandler = useMemoOne(
    () =>
      onGestureEvent({
        translationX,
        translationY,
        velocityY,
        state,
      }),
    [state, translationX, translationY, velocityY]
  );

  useCode(
    () =>
      block([
        cond(
          and(not(shouldSnapBack), eq(snapTo, SNAP_BACK), eq(state, State.END)),
          set(shouldSnapBack, 1)
        ),
        cond(
          shouldSnapBack,
          call([], () => goBack()),
          cond(
            eq(state, State.END),
            [
              set(translateX, timing({ from: translateX, to: 0 })),
              set(translateY, timing({ from: translateY, to: 0 })),
            ],
            [
              set(translateX, multiply(translationX, 0.5)),
              set(translateY, pow(multiply(translationY, 0.6), 1.01)),
            ]
          )
        ),
      ]),
    []
  );

  return (
    <ScrollView
      style={styles.container}
      ref={scrollRef}
      waitFor={gestureHandlerRef}
      onScroll={onScroll}
      scrollEventThrottle={100}>
      <PanGestureHandler
        {...gestureHandler}
        ref={gestureHandlerRef}
        activeOffsetY={5}
        failOffsetY={-5}
        enabled={enableGesture}>
        <Animated.View
          style={{
            transform: [{ translateX }, { translateY }, { scale }],
            backgroundColor: "white",
          }}>
          <SharedElement id={`${id}`}>
            <Image source={{ uri: imageUrl }} style={styles.headerImage} />
          </SharedElement>
          <VanillaAnimated.View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: gradientOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-10, 0],
              }),
              height: 80,
              opacity: gradientOpacity,
            }}>
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "transparent"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: 90,
              }}
            />
            <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
              <Ionicons
                style={styles.close}
                name="ios-close"
                size={40}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setLiked(!liked)}>
              <Ionicons
                style={styles.favourite}
                name={liked ? "md-heart" : "md-heart-empty"}
                size={28}
                color={liked ? "#FF367E" : "white"}
              />
            </TouchableOpacity>
          </VanillaAnimated.View>
          <Layout>
            <Flex alignItems="center" justifyContent="space-between">
              <Text style={styles.title}>{title}</Text>
              <SharedElement id={`rating.${id}`}>
                <Rating rating={rating} />
              </SharedElement>
            </Flex>
            <View style={{ marginTop: 16 }} />
            <Flex>
              {attributes.map((attr, i) => (
                <Text key={i} style={[styles.infoText, { marginRight: 5 }]}>
                  {attr} {i === attributes.length - 1 ? null : "•"}
                </Text>
              ))}
            </Flex>
            <View style={{ marginTop: 8 }} />
            <Divider />
            <Flex>
              <Text style={styles.infoText}>{distance} miles</Text>
              <Text style={{ marginLeft: 5, marginRight: 5 }}>•</Text>
              <Text style={styles.infoText}>{deliveryFee} delivery fee</Text>
            </Flex>
            <Text style={[styles.infoText, { marginTop: 8 }]}>{location}</Text>
            <Divider />
            <Text style={styles.infoText}>Menu</Text>
            {categories.map((category) =>
              category.dishes.length < 1 ? null : (
                <Category key={category.id} {...category} />
              )
            )}
          </Layout>
        </Animated.View>
      </PanGestureHandler>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
  headerImage: {
    resizeMode: "cover",
    height: HEADER_IMAGE_HEIGHT,
    width: FULL_WIDTH,
  },
  title: {
    fontSize: 28,
    fontFamily: "airbnbMed",
  },
  close: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  favourite: {
    position: "absolute",
    top: 45,
    right: 20,
  },
  divider: {
    width: FULL_WIDTH,
    height: 1,
    backgroundColor: "#C0C0C0",
    left: -HORIZONTAL_MARGIN,
    marginTop: 20,
    marginBottom: 20,
  },
  deliveryInfo: {
    display: "flex",
    flexDirection: "row",
  },
  infoText: {
    fontSize: 16,
  },
});
