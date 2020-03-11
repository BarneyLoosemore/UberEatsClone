import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar
} from "react-native";
import { useNavigation } from "react-navigation-hooks";

import { AppContainer } from "./src/screens";

export default () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const finishLoading = () => setLoadingComplete(true);
  // const { navigate } = useNavigation();
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
      transport: require("./src/assets/fonts/transporth.ttf"),
      overpass: require("./src/assets/fonts/Overpass-Regular.ttf"),
      "overpass-bold": require("./src/assets/fonts/Overpass-SemiBold.ttf"),
      lato: require("./src/assets/fonts/Lato-Bold.ttf"),
      "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf")
    }),
    Asset.loadAsync([
      require("./src/assets/RatingIcon.png"),
      require("./src/assets/Filter.png")
    ])
  ]);
}

const handleLoadingError = err => console.warn(err);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    // alignItems: "center",
    justifyContent: "center"
  }
});
