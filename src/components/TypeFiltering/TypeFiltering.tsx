import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const { height, width } = Dimensions.get('window');

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 10,
          marginRight: 12,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 8,
          height: height * 0.045,
        },
        item == active
          ? { backgroundColor: '#5C3EBC' }
          : { borderColor: '#F0EFF3', borderWidth: 2 },
      ]}
    >
      <Text
        style={[
          {
            fontSize: 12,
            color: '#7849f7',
            fontWeight: '600',
          },

          item == active && { color: 'white' },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [category, setCategory] = useState<String>('Birlikte İyi Gider');
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.075,
        paddingVertical: height * 0.012,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        elevation: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default TypeFiltering;
