import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');
const CartItem = ({ product, quantity }: any) => {
  const dispatch = useDispatch();
  return (
    <View style={{ width: '100%', backgroundColor: 'white' }}>
      <View
        style={{
          height: height * 0.13,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: width * 0.04,
          backgroundColor: 'white',
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 0.5,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ width: height * 0.1, height: height * 0.1 }}
            source={{ uri: product?.image }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                maxWidth: width * 0.45,
              }}
            >
              {product?.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 6,
                color: '#848897',
                fontWeight: '600',
              }}
            >
              {product?.miktar}
            </Text>
            <Text
              style={{
                color: '#5d3ebd',
                fontWeight: 'bold',
                marginTop: 6,
                fontSize: 15,
              }}
            >
              ₺{product?.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width * 0.2,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            height: height * 0.038,
            borderRadius: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => dispatch(REMOVE_PRODUCT(product))}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#5d3ebd',
              height: height * 0.038,
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => dispatch(ADD_PRODUCT(product))}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
