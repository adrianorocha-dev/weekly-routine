import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons as MIcon } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';

import { Appointment } from '../../database/entities/Appointment';

import hoursToMinutes from '../../utils/hoursToMinutes';

import backgroundImage from '../../assets/background-create-page.png';
import Logo from '../../assets/logo.png';

import styles from './styles';

const colors = [
  '#45EDF8',
  '#45F86C',
  '#F4F845',
  '#F89B45',
  '#F84545',
  '#4577F8',
  '#BE45F8',
  '#C7C7C7',
];

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const Create: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>();
  const [title, setTitle] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [description, setDescription] = useState('');
  const [tagColor, setTagColor] = useState('');

  const navigation = useNavigation();

  function validateForm() {
    const formData = {
      selectedDay,
      title,
      timeStart,
      timeEnd,
      description,
      tagColor,
    };

    const isThereEmptyFields = Object.values(formData).some(
      value => value === undefined || value === ''
    );

    return !isThereEmptyFields;
  }

  async function handleCreateAppointment() {
    if (!validateForm()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const appointment = Appointment.create({
        title,
        color: tagColor,
        description,
        weekDay: selectedDay,
        startTime: hoursToMinutes(timeStart),
        finishTime: hoursToMinutes(timeEnd),
      });

      await appointment.save();

      Alert.alert('Cadastrado', 'Compromisso salvo com sucesso.');

      navigation.navigate('Home');
    } catch (error) {
      if (error.message === 'Invalid hour format') {
        Alert.alert('Formato de hora errado', 'O formato correto é hh:mm');
      } else {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style={styles.header}>
        <View style={styles.headerOfheader}>
          <TouchableOpacity
            style={styles.Icon}
            onPress={() => navigation.navigate('Home')}
          >
            <MIcon name="arrow-back" size={18} color="#ff5d5d" />
          </TouchableOpacity>

          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.titlePage}>
          <Text style={styles.textTile}> Criar Compromisso </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1, marginBottom: 95 }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.form}>
          <View style={styles.select}>
            <Picker
              selectedValue={selectedDay}
              style={{ height: 40 }}
              onValueChange={itemValue => {
                setSelectedDay(Number(itemValue));
              }}
            >
              <Picker.Item
                label="Selecione um dia da semana"
                value={undefined}
                color="#c5c9c7"
              />
              {weekDays.map((day, index) => (
                <Picker.Item key={day} label={day} value={index} />
              ))}
            </Picker>
          </View>

          <View style={styles.duration}>
            <TextInput
              placeholder="Das"
              style={styles.inputDuration}
              value={timeStart}
              onChangeText={timeStart => setTimeStart(timeStart)}
            />

            <TextInput
              placeholder="Até"
              style={styles.inputDuration}
              value={timeEnd}
              onChangeText={timeEnd => setTimeEnd(timeEnd)}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Título do compromisso"
            value={title}
            onChangeText={title => setTitle(title)}
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Descrição"
            numberOfLines={4}
            multiline={true}
            value={description}
            onChangeText={description => setDescription(description)}
          ></TextInput>
        </View>

        <View style={styles.buttonsColor}>
          <FlatList
            contentContainerStyle={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={colors}
            horizontal={true}
            keyExtractor={color => String(color)}
            renderItem={({ item: color }) => (
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: color },
                  tagColor === color
                    ? {
                        borderWidth: 1,
                        borderColor: 'black',
                        borderStyle: 'solid',
                      }
                    : {},
                ]}
                onPress={() => {
                  setTagColor(color);
                }}
              />
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleCreateAppointment}
        >
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Create;
