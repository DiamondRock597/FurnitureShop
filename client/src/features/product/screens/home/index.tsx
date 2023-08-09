import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/client';

import { Header } from 'features/product/components/header';
import { FurnitureCard } from '../../components/furniture_card';
import { GET_FURNITURES } from '../../graphql/queries';

import { style } from './style';

export const HomeScreen = () => {
  const { data, refetch, loading } = useQuery(GET_FURNITURES);
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator
        indicatorStyle="black"
        refreshing={loading}
        keyExtractor={(item) => `FurnitureCard-${item.id}`}
        onRefresh={refetch}
        numColumns={2}
        contentContainerStyle={style.list}
        data={data?.furnitures}
        renderItem={({ item }) => <FurnitureCard {...item} />}
      />
    </SafeAreaView>
  );
};
