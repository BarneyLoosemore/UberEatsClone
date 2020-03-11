import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { GalleryIndex } from "./GalleryIndex";
import {
  GALLERY_IMAGE_WIDTH,
  GALLERY_IMAGE_HEIGHT,
  SLIDER_WIDTH
} from "../constants/styles";

type ImageGalleryProps = { images: string[] };

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <GalleryIndex galleryLength={images.length} activeIndex={activeIndex} />
      <Carousel
        ref={carouselRef}
        itemWidth={GALLERY_IMAGE_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        data={images}
        loop
        loopClonesPerSide={1}
        onSnapToItem={() => setActiveIndex(carouselRef.current.currentIndex)}
        autoplay
        autoplayDelay={2000}
        autoplayInterval={6000}
        renderItem={({ item, index }) => (
          <TouchableHighlight key={index}>
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableHighlight>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: GALLERY_IMAGE_HEIGHT,
    width: GALLERY_IMAGE_WIDTH
  }
});
