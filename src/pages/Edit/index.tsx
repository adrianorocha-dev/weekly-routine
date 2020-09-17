import React from 'react';
import { View, Image } from 'react-native';

import backgroundImage from '../../assets/background-edit-page.png';

import styles from './styles';

const Edit: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
    </View>
  );
};

export default Edit;
