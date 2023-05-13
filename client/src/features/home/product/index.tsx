import React from 'react';
import { Image, StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { BackButton } from 'components/back_button';
import { Button, RoundedType } from 'components/button';
import { Counter } from 'components/counter';

import { styles } from './styles';

export const ProductScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <View style={styles.backButton}>
        <BackButton />
      </View>
      <Image style={styles.image} resizeMode="cover" source={require('@assets/images/example_1.png')} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>Minimal Stend</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.price}>$ 50</Text>
        <Counter />
      </View>
      <ScrollView indicatorStyle="black">
        <Text style={styles.description}>
          Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family
          for now. With 3 different colors, you can easily select the best match for your home.
        </Text>
      </ScrollView>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.favouriteContainer}>
        <Image style={styles.favouriteIcon} source={require('@assets/images/active_favourite.png')} />
      </TouchableOpacity>
      <Button style={styles.addingButton} text="Add to cart" roundedType={RoundedType.Medium} />
    </View>
  </View>
);
