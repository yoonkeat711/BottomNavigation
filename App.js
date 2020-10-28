/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import NavigationsStack from './src/navigations/ NavigationsStack';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
          <NavigationsStack />
        </PaperProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
