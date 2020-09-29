import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PieChart, BarChart } from 'react-native-chart-kit';

import { Appointment } from '../../database/entities/Appointment';

import Logo from '../../assets/logo.png';

import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const Report: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [dalyAppointments, setDalyAppointments] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  const navegation = useNavigation();

  useEffect(() => {
    Appointment.find()
      .then(appointments => {
        setAppointments(appointments);

        const appointmentsCount = [0, 0, 0, 0, 0, 0, 0];

        appointments.forEach(appointment => {
          appointmentsCount[appointment.weekDay]++;
        });

        setDalyAppointments(appointmentsCount);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const pieData = appointments.map(appointment => ({
    name: appointment.title,
    population: appointment.finishTime - appointment.startTime,
    color: appointment.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  const barData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [
      {
        data: dalyAppointments,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerOfheader}>
          <Image source={Logo} style={styles.logo} />

          <TouchableOpacity
            style={styles.Icon}
            onPress={() => navegation.goBack()}
          >
            <Icon name="arrow-back" size={18} color="#ff5d5d" />
          </TouchableOpacity>
        </View>
        <Text style={styles.titlePage}>Relatório Semanal</Text>
      </View>

      <ScrollView
        style={{ flex: 1, marginBottom: '11%' }}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.pieChart}>
          <Text style={{ marginTop: '5%', fontWeight: 'bold' }}>
            Tipos de compromisso durante a semana
          </Text>

          <PieChart
            data={pieData}
            width={screenWidth}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            height={200}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>

        <View style={styles.barChart}>
          <Text style={{ fontWeight: 'bold' }}>
            Número de compromissos por dia
          </Text>

          <BarChart
            data={barData}
            width={screenWidth - 10}
            height={200}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'white',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Report;
