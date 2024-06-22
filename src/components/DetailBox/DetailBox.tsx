import { Text, View } from 'react-native';
import React from 'react';

const DetailBox = ({ product }: any) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#5d3ebd', fontWeight: 'bold', marginTop: 12 }}>
        ₺{product?.fiyat}
      </Text>
      <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 12 }}>
        {product?.name}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontWeight: '600',
          marginTop: 6,
          paddingBottom: 18,
        }}
      >
        {product?.miktar}
      </Text>
    </View>
  );
};

export default DetailBox;
