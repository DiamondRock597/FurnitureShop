import React from 'react';
import { Image, StatusBar, View, Text, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

import { BackButton } from 'common/components/back_button';
import { Button, RoundedType } from 'common/components/button';
import { Counter } from 'common/components/counter';
import { AppStackParamList, Routes } from 'configs/navigation/routes';
import { FullPageLoader } from 'common/components/full_page_loader';
import { GET_FURNITURE } from '../../graphql/queries';

import { styles } from './styles';

export const ProductScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, Routes.Product>>();
  const { data, loading } = useQuery(GET_FURNITURE, { variables: { id: route.params.productId } });

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <Image style={styles.image} resizeMode="cover" source={{ uri: data?.furniture.image }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data?.furniture.name}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.price}>$ {data?.furniture.cost}.00</Text>
          <Counter />
        </View>
        <ScrollView indicatorStyle="black">
          <Text style={styles.description}>{data?.furniture.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.favouriteContainer}>
          <Image style={styles.favouriteIcon} source={require('@assets/images/active_favourite.png')} />
        </TouchableOpacity> */}
        <Button style={styles.addingButton} text="Add to cart" roundedType={RoundedType.Medium} />
      </View>
    </View>
  );
};
