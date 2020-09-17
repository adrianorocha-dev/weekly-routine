import React from 'react';
import { View, Image, TextInput } from 'react-native';

import backgroundImage from '../../assets/background-create-page.png';

import styles from './styles';

const Create: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <TextInput style={styles.input} />
    </View>
  );
};

export default Create;
