import React from "react";
import { StyleSheet, View } from "react-native";

import { HORIZONTAL_MARGIN } from "../../constants/styles";

type LayoutProps = { children: React.ReactNode };

export const Layout = ({ children }: LayoutProps) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    margin: HORIZONTAL_MARGIN
  }
});
