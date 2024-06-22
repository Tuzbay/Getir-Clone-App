import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import CategoryFilterScreen from '../screen/CategoryFilterScreen/CategoryFilterScreen';
import ProductDetailsScreen from '../screen/ProductDetailsScreen/ProductDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import CartSecreen from '../screen/CartSecreen/CartSecreen';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAN_CART } from '../redux/slices/cartSlice';

const Stack = createStackNavigator();

const { width, height } = Dimensions.get('window');
const MyStack = ({ navigation, route }: any) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.products);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  const tabHiddenRoutes = ['ProductDetails', 'CartScreen'];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName!)) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'true' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{ width: 70, height: 54 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CartScreen', { totalPrice: totalPrice })
              }
              style={{
                width: width * 0.2,
                height: 33,
                backgroundColor: 'white',
                marginRight: width * 0.03,
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{ width: 23, height: 23 }}
                source={require('../../assets/cart.png')}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: 'white' }}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: 'white',
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: '#5d3ebd',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}
                >
                  ₺{totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={24} color={'white'} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Ionicons name="heart" size={24} color={'#32177a'} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
              Ürün Detayı
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartSecreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#5C3EBC' },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <Ionicons name="close" size={24} color={'white'} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(CLEAN_CART())}
              style={{ paddingRight: 12 }}
            >
              <Ionicons name="trash" size={24} color={'white'} />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
              Sepetim
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator({ navigation, route }: any) {
  return <MyStack navigation={navigation} route={route} />;
}
