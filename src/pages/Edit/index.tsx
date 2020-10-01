import React, { useEffect, useState } from 'react';
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
import { Picker } from '@react-native-community/picker';
import { MaterialIcons as MIcon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import backgroundImage from '../../assets/background-edit-page.png';
import Logo from '../../assets/logo.png';

import styles from './styles';
import { Appointment } from '../../database/entities/Appointment';
import minutesToHours from '../../utils/minutesToHours';
import hoursToMinutes from '../../utils/hoursToMinutes';

import {
  createFormValidator,
  validateFinishTimeBiggerThanStartTime,
  validateHourFormat,
  validateNoEmptyFields,
} from '../../utils/formValidation';

type RouteParams = {
  id: number;
};

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

const formValidator = createFormValidator(
  validateNoEmptyFields,
  validateHourFormat,
  validateFinishTimeBiggerThanStartTime
);

const Edit: React.FC = () => {
  const [day, setDay] = useState<number>();
  const [title, setTitle] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [description, setDescription] = useState('');
  const [tagColor, setTagColor] = useState('');

  const route = useRoute();
  const params = route.params as RouteParams;

  const navigation = useNavigation();

  useEffect(() => {
    Appointment.findOne(params.id)
      .then(appointment => {
        setDay(appointment.weekDay);
        setTitle(appointment.title);
        setDescription(appointment.description);
        setTimeStart(minutesToHours(appointment.startTime));
        setTimeEnd(minutesToHours(appointment.finishTime));
        setTagColor(appointment.color);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  async function handleSave() {
    const formData = {
      selectedDay: day,
      title,
      timeStart,
      timeEnd,
      description,
      tagColor,
    };

    const validationResult = formValidator.validate(formData);

    if (!validationResult.isValid) {
      Alert.alert('Erro no formulário', validationResult.errorMessage);
      return;
    }

    try {
      await Appointment.update(params.id, {
        weekDay: day,
        title,
        description,
        startTime: hoursToMinutes(timeStart),
        finishTime: hoursToMinutes(timeEnd),
        color: tagColor,
      });

      Alert.alert('Concluído', 'Alterações salvas com sucesso.');

      navigation.navigate('Detail', { id: params.id });
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível salvar as alterações');
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
            onPress={() => navigation.goBack()}
          >
            <MIcon name="arrow-back" size={18} color="#ff5d5d" />
          </TouchableOpacity>

          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.titlePage}>
          <Text style={styles.textTile}> Editar Compromisso </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.form}>
          <View style={styles.select}>
            <Picker
              style={{ height: 40 }}
              mode="dropdown"
              selectedValue={day}
              onValueChange={itemValue => {
                if (itemValue) setDay(Number(itemValue));
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
              onChangeText={timeStart => setTimeStart(timeStart)}
              value={timeStart}
              editable={true}
            ></TextInput>

            <TextInput
              placeholder="Até"
              style={styles.inputDuration}
              onChangeText={timeEnd => setTimeEnd(timeEnd)}
              value={timeEnd}
            ></TextInput>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Título do compromisso"
            onChangeText={title => setTitle(title)}
            value={title}
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Descrição"
            numberOfLines={4}
            multiline={true}
            onChangeText={description => setDescription(description)}
            value={description}
          />
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
              ></TouchableOpacity>
            )}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Edit;
