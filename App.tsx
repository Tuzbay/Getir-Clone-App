import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import * as Linking from 'expo-linking';
LogBox.ignoreAllLogs;

export default function App() {
  const prefix = Linking.createURL('/');
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Search: {
          screens: {
            CartScreen: {
              path: 'cartScreen/:message',
              parse: {
                message: (message: string) => `mesajınız:${message}`,
              },
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        {/* <NavigationContainer> */}
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
