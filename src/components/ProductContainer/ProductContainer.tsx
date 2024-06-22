import { Text, View } from 'react-native';
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import productionsGetir from '../../../assets/productionsGetir';

const ProductContainer = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        {productionsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item?.id} item={item} />
        ))}
      </View>
      <Text style={{ color: 'gray', fontWeight: 'bold', padding: 14 }}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          backgroundColor: 'white',
          flex: 1,
          paddingVertical: 10,
        }}
      >
        {productionsGetir.slice(2).map((item) => (
          <ProductItem key={item?.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;
