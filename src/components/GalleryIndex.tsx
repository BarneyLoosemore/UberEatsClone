import React from "react";
import { StyleSheet, View } from "react-native";

import { GALLERY_IMAGE_HEIGHT } from "../constants/styles";

type GalleryIndexProps = { activeIndex: number; galleryLength: number };

export const GalleryIndex = ({
  activeIndex,
  galleryLength
}: GalleryIndexProps) => (
  <View style={styles.container}>
    {Array.from(Array(galleryLength)).map((_, i) => (
      <View
        key={i}
        style={[
          styles.indexCircle,
          i === activeIndex && styles.activeIndexCircle
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    zIndex: 9999,
    top: GALLERY_IMAGE_HEIGHT - 30
  },
  indexCircle: {
    backgroundColor: "black",
    width: 12,
    height: 12,
    borderRadius: 12,
    marginLeft: 5,
    marginRight: 5,
    opacity: 0.6
  },
  activeIndexCircle: {
    opacity: 1,
    backgroundColor: "white"
  }
});
