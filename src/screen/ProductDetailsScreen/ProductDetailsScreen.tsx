import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Product } from '../../models';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import DetailBox from '../../components/DetailBox/DetailBox';
import DetailPropery from '../../components/DetailPropery/DetailPropery';
import CardButton from '../../components/CardButton/CardButton';

const ProductDetails = (props: any) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color={'#5d3ebd'} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product?.images} />
        <DetailBox product={product} />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: '#808899',
            fontWeight: '600',
          }}
        >
          Detaylar
        </Text>
        <DetailPropery />
      </ScrollView>
      <CardButton product={product} />
    </View>
  );
};

export default ProductDetails;
