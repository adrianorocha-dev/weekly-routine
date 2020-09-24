import React from 'react';
import { View, Image, TouchableOpacity,Text} from 'react-native';

import backgroundImage from '../../assets/background-detail-page.png';
import Logo from '../../assets/logo.png'
import line from '../../assets/Line.png'
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

const Detail: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style = {styles.header}>

        <View style = {styles.hedaerOfheader}>

          <TouchableOpacity style = {styles.iconBack} onPress={() => navigation.navigate('Home')}>
            <Icon name="long-arrow-left" size={18} color='#FF5D5D'/>
          </TouchableOpacity>

          <Image source={Logo} style = {styles.imgLogo}></Image>

          <View style = {styles.icons}>
            
            <TouchableOpacity style = {styles.icon}>
              <Icon name = 'pencil' size = {16} color='#FF5D5D'/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.icon}>
              <Icon name = 'trash' size = {16} color='#FF5D5D'/>
            </TouchableOpacity>
            
          </View>
          
        </View>

        <View style = {styles.titlePage}>
            <Text style = {styles.textTile}> TituloCompromisso </Text>
        </View>
        
      </View>

      <View style  = {styles.body}>

        <View style={styles.line}> 

          <Image
            source={line}
            style={styles.imgLine}
            resizeMode="stretch"
          />


        </View>

        <View style = {styles.tagTime}>

            <View style = {styles.tag}>
              <Icon name="circle" size={12} color='#ff5d5d'/>
              <Text>8:00</Text>
            </View>
            
          
            <View style = {styles.tag}>
              <Icon name="circle" size={12} color='#ff5d5d'/>
              <Text>12:00</Text>
            </View>
            
          </View>

        <View style = {styles.detail}>

          <View style = {styles.task}>

            <View style = {styles.tagColor}>
              <Icon name="circle" size={25} color='#45EDF8'/>
            </View>

            <Text style = {styles.titulo}> Terça-feira das 8:00 às 12:00 </Text>

            <Text style ={styles.descricao} >Descrição do compromissso</Text>

          </View>

        </View>
        
      </View>

    </View>
  );
};

export default Detail;
