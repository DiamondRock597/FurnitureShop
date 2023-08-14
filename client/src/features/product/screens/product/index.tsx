import React, { useState } from 'react';
import { Image, StatusBar, View, Text, ScrollView, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMutation, useQuery } from '@apollo/client';

import { BackButton } from 'common/components/back_button';
import { Button, RoundedType } from 'common/components/button';
import { Counter } from 'common/components/counter';
import { AppStackParamList, MainStackRoutes } from 'configs/navigation/routes';
import { FullPageLoader } from 'common/components/full_page_loader';
import { GET_FURNITURE } from '../../graphql/queries';
import { ADD_TO_BASKET } from 'features/product/graphql/mutations';

import { styles } from './styles';

export const ProductScreen = () => {
  const [productAmount, setProductAmount] = useState<number>(1);
  const route = useRoute<RouteProp<AppStackParamList, MainStackRoutes.Product>>();

  const { data, loading } = useQuery(GET_FURNITURE, { variables: { id: route.params.productId }, fetchPolicy: 'cache-and-network' });
  const [addToCart] = useMutation(ADD_TO_BASKET, {
    onCompleted: () => Alert.alert('Success!', `You added ${data?.furniture.name} to your basket`),
    onError: () => Alert.alert('Ups', 'Something went wrong'),
  });

  const onAddToCart = () => addToCart({ variables: { furnitureId: data?.furniture.id, quantity: productAmount } });

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <Image style={styles.image} resizeMode="cover" source={{ uri: data?.furniture.image }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data?.furniture.name}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.price}>$ {data?.furniture.cost}.00</Text>
          <Counter value={productAmount} onChange={setProductAmount} />
        </View>
        <ScrollView indicatorStyle="black">
          <Text style={styles.description}>{data?.furniture.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onAddToCart} style={styles.addingButton} text="Add to cart" roundedType={RoundedType.Medium} />
      </View>
    </View>
  );
};
