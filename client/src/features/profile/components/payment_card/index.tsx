import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  cardNumber?: string;
  holderName?: string;
  expireDate?: string;
  isActive?: boolean;
}
const HIDDEN_INDEX_OF_CARD_NUMBER = 12;
const END_OF_CARD_NUMBER = 16;

export const PaymentCard: React.FC<Props> = ({ cardNumber, holderName, expireDate, isActive }) => {
  const containerStyle = useMemo(() => [styles.cardContainer, !isActive && { opacity: 0.4 }], [isActive]);

  return (
    <View style={containerStyle}>
      <Image source={require('@assets/images/master_card.png')} />
      <Text style={styles.cardNumber}>**** **** **** {cardNumber?.slice(HIDDEN_INDEX_OF_CARD_NUMBER, END_OF_CARD_NUMBER) ?? 'XXXX'}</Text>
      <View style={styles.cardInfoContainer}>
        <View>
          <Text style={styles.infoTitle}>Card Holder Name</Text>
          <Text style={styles.information}>{holderName ?? 'XXXXXX'}</Text>
        </View>
        <View>
          <Text style={styles.infoTitle}>Expire Date</Text>
          <Text style={styles.information}>{expireDate ?? 'XX/XX'}</Text>
        </View>
      </View>
    </View>
  );
};
