import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'NunitoSans-Bold'}}>App TExt</Text>
    </SafeAreaView>
  );
};

export default App;
