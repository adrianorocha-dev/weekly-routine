import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface AppointmentCardProps {
  name: string;
  color: string;
  onPress?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  name,
  color,
  onPress,
}) => {
  return (
    <RectButton style={styles.card} onPress={onPress}>
      <View style={[styles.cardColorIndicator, { backgroundColor: color }]} />
      <Text>{name}</Text>
    </RectButton>
  );
};

export default AppointmentCard;
