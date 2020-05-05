import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  Animated
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { GalleryIndex } from "./GalleryIndex";
import {
  HORIZONTAL_MARGIN,
  GALLERY_IMAGE_WIDTH,
  GALLERY_IMAGE_HEIGHT,
  SLIDER_WIDTH
} from "../constants/styles";

type ImageGalleryProps = {
  offers: {
    image: string;
    offerText: string;
  }[];
};

type ContentProps = { image: string; offerText: string; active: boolean };

const Content = ({ image, offerText, active }: ContentProps) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (active) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        delay: 0
      }).start();
    }
    if (!active) {
      opacity.setValue(0);
    }
  }, [active]);

  return (
    <View>
      <Animated.Text
        style={{
          position: "absolute",
          color: "white",
          fontSize: 22,
          fontFamily: "airbnbMed",
          bottom: 45,
          left: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [-10, HORIZONTAL_MARGIN]
          }),
          opacity,
          zIndex: 999
        }}>
        {offerText}
      </Animated.Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export const ImageGallery = ({ offers }: ImageGalleryProps) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <GalleryIndex galleryLength={offers.length} activeIndex={activeIndex} />
      <Carousel
        ref={carouselRef}
        itemWidth={GALLERY_IMAGE_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        data={offers}
        loop
        loopClonesPerSide={1}
        onSnapToItem={() => setActiveIndex(carouselRef.current.currentIndex)}
        autoplay
        autoplayDelay={2000}
        autoplayInterval={6000}
        renderItem={({ item: { image, offerText }, index }) => (
          <TouchableHighlight key={index} style={{ backgroundColor: "black" }}>
            <Content
              image={image}
              offerText={offerText}
              active={index - 1 === activeIndex}
            />
          </TouchableHighlight>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: GALLERY_IMAGE_HEIGHT,
    width: GALLERY_IMAGE_WIDTH,
    opacity: 0.6
  }
});
