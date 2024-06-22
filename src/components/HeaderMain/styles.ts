import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#F7D102',
    flexDirection: 'row',
  },
  headerOne: {
    height: height * 0.064,
    width: '80%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 14,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 2,
    paddingLeft: 10,
  },
  headerTwo: {
    height: height * 0.064,
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
