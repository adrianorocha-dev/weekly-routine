import React from 'react';
import { View, Image, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';

import backgroundImage from '../../assets/background-create-page.png';
import Logo from '../../assets/logo.png'

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const Create: React.FC = () => {

  const colors = ['#45EDF8', '#45F86C', '#F4F845', '#F89B45', '#F84545', '#4577F8', '#BE45F8', '#C7C7C7']

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style = {styles.header}>

          <View style = {styles.headerOfheader}>

            <Image source = {Logo} style = {styles.logo}/>

          </View>

          <View style = {styles.titlePage}>
            <Text style = {styles.textTile}> Criar Compromisso </Text>
          </View>
          
      </View>

      <View style = {styles.form}>

          <TextInput placeholder="Selecione o dia da semana" style={styles.input} />

          <View style = {styles.duration}>
            <TextInput placeholder="Das" style={styles.inputDuration}></TextInput>
            <TextInput placeholder="Até" style={styles.inputDuration}></TextInput>
          </View>

          <TextInput placeholder="Titulo do compromisso" style={styles.input}></TextInput>

          <TextInput placeholder="Descrição" multiline = {true} numberOfLines = {4} style={styles.input}></TextInput>

      </View>

      <View style = {styles.buttonsColor}>

          <FlatList 
              style = {styles.flatlist}
              showsVerticalScrollIndicator = {false}
              data = {colors}
              horizontal = {true}
              keyExtractor = {color => String(color)}
              renderItem = {({item: color}) => (

                  <TouchableOpacity style = {styles.button}>
                      <Icon name="circle" size={25} color={color} />
                  </TouchableOpacity>

              )}
          />

      </View>

      <TouchableOpacity style = {styles.saveButton}>
            <Text style = {styles.textButton}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Create;
