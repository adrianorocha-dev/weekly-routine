import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Appointment } from '../../database/entities/Appointment';
import minutesToHours from '../../utils/minutesToHours';

import backgroundImage from '../../assets/background-detail-page.png';
import Logo from '../../assets/logo.png';
import line from '../../assets/Line.png';

import styles from './styles';

type RouteParams = {
  id: number;
};

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const Detail: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointment>();

  const route = useRoute();
  const params = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleDeleteAppointment() {
    Alert.alert('Atenção', 'Tem certeza que deseja deletar o compromisso?', [
      { text: 'Não' },
      {
        text: 'Sim',
        onPress: () => {
          appointment
            .remove()
            .then(() => {
              Alert.alert('Deletado com sucesso', '');

              navigation.navigate('Home');
            })
            .catch(error => {
              console.error(error);

              Alert.alert('Erro', 'Erro ao deletar compromisso');
            });
        },
      },
    ]);
  }

  useEffect(() => {
    Appointment.findOne(params.id)
      .then(appointment => {
        setAppointment(appointment);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      <View style={styles.header}>
        <View style={styles.hedaerOfheader}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => navigation.navigate('Home')}
          >
            <Icon name="arrow-back" size={24} color="#FF5D5D" />
          </TouchableOpacity>

          <Image source={Logo} style={styles.imgLogo}></Image>

          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate('Edit', { id: params.id })}
            >
              <Icon name="edit" size={24} color="#FF5D5D" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.icon}
              onPress={handleDeleteAppointment}
            >
              <Icon name="delete" size={24} color="#FF5D5D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titlePage}>
          <Text style={styles.textTile}>{appointment?.title}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.line}>
          <Image source={line} style={styles.imgLine} resizeMode="stretch" />
        </View>

        <View style={styles.tagTime}>
          <View style={styles.tag}>
            <Icon name="lens" size={12} color="#ff5d5d" />
            <Text>{minutesToHours(appointment?.startTime)}</Text>
          </View>

          <View style={styles.tag}>
            <Icon name="lens" size={12} color="#ff5d5d" />
            <Text>{minutesToHours(appointment?.finishTime)}</Text>
          </View>
        </View>

        <View style={styles.detail}>
          <View style={styles.task}>
            <ScrollView
              style={{ flex: 1, marginBottom: '11%' }}
              showsVerticalScrollIndicator={true}
            >
              <View style={styles.tagColor}>
                <Icon name="lens" size={25} color={appointment?.color} />
              </View>

              <Text style={styles.headerTask}>
                {weekDays[appointment?.weekDay]} das{' '}
                {minutesToHours(appointment?.startTime)} às{' '}
                {minutesToHours(appointment?.finishTime)}
              </Text>

              <Text style={styles.description}>{appointment?.description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
