import React, { useState } from 'react';
import { View, ScrollView, Image, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';

import {Picker} from '@react-native-community/picker'

import { MaterialIcons as MIcon}  from '@expo/vector-icons';

import backgroundImage from '../../assets/background-create-page.png';
import Logo from '../../assets/logo.png'

import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation, useRoute} from '@react-navigation/native';


const Create: React.FC = () => {

  const colors = ['#45EDF8', '#45F86C', '#F4F845', '#F89B45', '#F84545', '#4577F8', '#BE45F8', '#C7C7C7']

  const [selectedValue, setSelectedValue] = useState("Selecione um dia da semana");

  const navegation = useNavigation();

  const [day, setDay] = useState('');
  const [title, setTitle] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [description, setDescription] = useState('');
  const [tagColor, setTagColor] = useState('');

  const data = {
    day,
    title,
    timeStart,
    timeEnd,
    description,
    tagColor
  };


  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style = {styles.header}>

          <View style = {styles.headerOfheader}>

         
            <TouchableOpacity style = {styles.Icon} onPress = {() => navegation.navigate('Home')}>
                <MIcon name="arrow-back" size={18} color = '#ff5d5d'/>
            </TouchableOpacity>
    

            <Image source = {Logo} style = {styles.logo}/>

          </View>

          <View style = {styles.titlePage}>
            <Text style = {styles.textTile}> Criar Compromisso </Text>
          </View>
          
      </View>
      
      <ScrollView
        style={{ flex: 1, marginBottom: 95 }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
        >

        <View style = {styles.form}>

            <View style = {styles.select}>

                  <Picker
                      selectedValue={selectedValue}
                      style={{ height: 40}}
                      onValueChange={(itemValue: any) => {setSelectedValue(itemValue); setDay(itemValue);}} /*, itemIndex) => setSelectedValue(itemValue) */
                  >   
                      <Picker.Item label="Selecione um dia da semana" value = '' color='#c5c9c7'/>
                      <Picker.Item label="Segunda" value="seg"/>
                      <Picker.Item label="Terça" value="ter" />
                      <Picker.Item label="Quarta" value="qua" />
                      <Picker.Item label="Quinta" value="qui" />
                      <Picker.Item label="Sexta" value="sex" />
                      <Picker.Item label="Sabado" value="sab" />
                      <Picker.Item label="Domingo" value="dom" />
                  
                  </Picker>
  
            </View>

            <View style = {styles.duration}>

              <TextInput placeholder="Das" style={styles.inputDuration}
                onChangeText={timeStart => setTimeStart(timeStart)}
                defaultValue={timeStart}>
              </TextInput>

              <TextInput placeholder="Até" style={styles.inputDuration}
                onChangeText={timeEnd => setTimeEnd(timeEnd)}
                defaultValue={timeEnd}>
              </TextInput>

            </View>

            <TextInput style = {styles.input} placeholder = 'Título do compromisso' 
                  onChangeText={title => setTitle(title)}
                  defaultValue={title}>
            </TextInput>

            <TextInput style = {styles.input} placeholder = 'Descrição'
                  numberOfLines = {4}
                  multiline = {true} 
                  onChangeText={description => setDescription(description)}
                  defaultValue={description}>
              </TextInput>

        </View>

        <View style = {styles.buttonsColor}>

            <FlatList 
                contentContainerStyle = {styles.flatlist}
                showsVerticalScrollIndicator = {false}
                data = {colors}
                horizontal = {true}
                keyExtractor = {color => String(color)}
                renderItem = {({item: color}) => (

                    <TouchableOpacity style = {[
                      styles.button, 
                      {backgroundColor: color},
                      tagColor === color ? {
                        borderWidth: 1, 
                        borderColor: 'black', 
                        borderStyle: 'solid'
                        }: {}
                      ]} 
                        onPress = {() => {setTagColor(color)}}>
                        {/* <Icon name="circle" size={25} color={color} /> */}
                    </TouchableOpacity>

                )}
            />

        </View>

        <TouchableOpacity style = {styles.saveButton} onPress = {() => console.log(data)}>
              <Text style = {styles.textButton}>Salvar</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
};

export default Create;
