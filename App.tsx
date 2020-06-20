import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Platform, StyleSheet, View, StatusBar } from "react-native";

import { AppContainer } from "./src/screens";

export default () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const finishLoading = () => setLoadingComplete(true);
  if (!loadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={finishLoading}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppContainer />
      </View>
    );
  }
};

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      airbnbBlack: require("./src/assets/fonts/AirbnbCerealBlack.ttf"),
      airbnbMed: require("./src/assets/fonts/AirbnbCerealMedium.ttf"),
    }),
    Asset.loadAsync([
      require("./src/assets/RatingIcon.png"),
      require("./src/assets/Filter.png"),
    ]),
  ]);
}

const handleLoadingError = (err) => console.warn(err);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    justifyContent: "center",
  },
});
