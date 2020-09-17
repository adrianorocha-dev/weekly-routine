import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/background-home.png';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.backgroundImage} />

      <View style={{ height: 200, justifyContent: 'space-between' }}>
        <Button
          title="Criar compromisso"
          onPress={() => navigation.navigate('Create')}
        />
        <Button
          title="Detalhar compromisso"
          onPress={() => navigation.navigate('Detail')}
        />
        <Button
          title="Editar compromisso"
          onPress={() => navigation.navigate('Edit')}
        />
        <Button
          title="Relatorio"
          onPress={() => navigation.navigate('Report')}
        />
      </View>
    </View>
  );
};

export default Home;
