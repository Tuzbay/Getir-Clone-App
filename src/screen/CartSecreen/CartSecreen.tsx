import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import productionsGetir from '../../../assets/productionsGetir';
import CartItem from '../../components/CartItem/CartItem';
import ProductItem from '../../components/ProductItem/ProductItem';
import { useSelector } from 'react-redux';
// import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const CartSecreen = ({ route }: any) => {
  const cartItems = useSelector((state: any) => state.cart.products);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem product={item} quantity={item?.quantity} />
          )}
        />
        <Text style={{ padding: 12, fontWeight: 'bold', color: '#5d3ebd' }}>
          Önerilen Ürünler
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces>
          {productionsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
          position: 'absolute',
          width: '100%',
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 2.5,
            backgroundColor: '#5d3ebd',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 8,
            elevation: 2,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            height: height * 0.06,
          }}
        >
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#5d3ebd' }}>
            ₺{totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartSecreen;
