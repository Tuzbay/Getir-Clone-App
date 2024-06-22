import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../redux/slices/cartSlice';

const { width, height } = Dimensions.get('window');
const CardButton = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(ADD_PRODUCT(product))}
      style={{
        width: '100%',
        height: height * 0.1,
        backgroundColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <View
        style={{
          backgroundColor: '#5d30c1',
          height: height * 0.06,
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;
