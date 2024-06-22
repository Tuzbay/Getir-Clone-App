import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        height: height * 0.25,
        paddingTop: 20,
      }}
    >
      <FlatList
        style={{ width: width * 0.5, height: height * 0.21 }}
        data={images}
        renderItem={(item): any => (
          <Image
            source={{ uri: item?.item }}
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: 'stretch',
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 30,
            height: 12,
          }}
        >
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: activeIndex == index ? '#5d3ebd' : '#b6b6b6',
                },
              ]}
            ></View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 100,
  },
});

export default ImageCarousel;
