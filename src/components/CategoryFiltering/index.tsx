import { Dimensions, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { categoriesGetir } from '../../../assets/categoriesGetir';

const { width, height } = Dimensions.get('window');

const CategoryBox = ({ item, active }: any) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 9,
          borderBottomColor:
            item.name === active.name ? '#ffd00c' : 'transparent',
          borderBottomWidth: item.name === active.name ? 2 : 0,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: 'white', fontWeight: '600' }}>
        {item?.name}
      </Text>
    </View>
  );
};

const index = ({ category }: any) => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: '100%',
        backgroundColor: '#7849f7',
        height: height * 0.065,
      }}
    >
      {categories.map((item: any) => (
        <CategoryBox key={item?.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default index;
