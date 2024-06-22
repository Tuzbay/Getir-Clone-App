import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import CategoryFiltering from '../../components/CategoryFiltering/index';
import TypeFiltering from '../../components/TypeFiltering/TypeFiltering';
import ProductContainer from '../../components/ProductContainer/ProductContainer';

const CategoryFilterScreen = (props: any) => {
  const [category, setCategory] = useState<any>(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
