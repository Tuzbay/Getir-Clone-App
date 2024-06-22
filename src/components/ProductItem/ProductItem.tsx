import { Dimensions, Image, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';
import { ADD_PRODUCT } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('window');

type productItemType = {
  item: Product;
};
const ProductItem = ({ item }: productItemType) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
      style={{
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 6,
      }}
    >
      <Image
        source={{
          uri: item?.image,
        }}
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.3,
          borderColor: 'gray',
        }}
      />
      <View
        style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 11,
            color: '#747990',
            textDecorationLine: 'line-through',
          }}
        >
          <Text>₺</Text>
          {item?.fiyat}
        </Text>
        <Text
          style={{
            color: '#5d3ebd',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: 6,
          }}
        >
          <Text>₺</Text>
          {item?.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: '600', marginTop: 5 }}>
        {item?.name}
      </Text>
      <Text
        style={{
          color: '#747990',
          fontSize: 12,
          fontWeight: '500',
        }}
      >
        {item?.miktar}
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(ADD_PRODUCT(item))}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: 'lightgray',
          backgroundColor: 'white',
          position: 'absolute',
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
        }}
      >
        <Entypo name="plus" size={22} color="#5d3ebd" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;
