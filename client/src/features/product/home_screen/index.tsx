import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from 'features/product/components/header';
import { FurnitureCard } from '../components/furniture_card';

import { style } from './style';

const data = [
  { id: 1, price: 100, name: 'Name' },
  { id: 2, price: 100, name: 'Name' },
  { id: 3, price: 100, name: 'Name' },
];

export const HomeScreen = () => {
  const renderItem = ({ item }) => <FurnitureCard price={item.price} name={item.name} />;
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <FlatList numColumns={2} contentContainerStyle={style.list} data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};
