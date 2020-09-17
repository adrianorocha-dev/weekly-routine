import React from 'react';
import { View, Image } from 'react-native';

import backgroundImage from '../../assets/background-detail-page.png';

import styles from './styles';

const Detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
    </View>
  );
};

export default Detail;
