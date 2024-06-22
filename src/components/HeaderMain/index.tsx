import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.getir.com/misc/emoji/house.png' }}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: '#5d3ebd',
            }}
          >
            Ev
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 13,
              color: '#6E7480',
              marginLeft: 14,
              marginRight: 10,
            }}
          >
            Mebusevleri, Akdeniz Caddesi
          </Text>
          <Entypo name="chevron-right" size={22} color="#5d3ebd" />
        </View>
      </View>
      <View style={styles.headerTwo}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#5D3EBD' }}>
          TVS
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5D3EBD' }}>
          13<Text style={{ fontSize: 16, color: '#5D3EBD' }}>dk</Text>
        </Text>
      </View>
    </View>
  );
};

export default index;
