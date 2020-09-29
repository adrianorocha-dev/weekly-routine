import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

import Logo from '../../assets/logo.png';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { PieChart, BarChart } from 'react-native-chart-kit';

import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const Report: React.FC = () => {
  const pieData = [
    {
      name: 'Tarefa 1',
      population: 15,
      color: '#45EDF8',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Tarefa 2',
      population: 5,
      color: '#45F86C',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Tarefa 3',
      population: 2,
      color: '#F4F845',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Tarefa 4',
      population: 10,
      color: '#F89B45',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Tarefa 5',
      population: 6,
      color: '#F84545',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },

    {
      name: 'Tarefa 6',
      population: 1,
      color: '#4577F8',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },

    {
      name: 'Tarefa 7',
      population: 8,
      color: '#BE45F8',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },

    {
      name: 'Tarefa 8',
      population: 7,
      color: '#C7C7C7',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const barData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [
      {
        data: [2, 4, 5, 8, 0, 9, 3],
      },
    ],
  };

  const navegation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerOfheader}>
          <Image source={Logo} style={styles.logo} />

          <TouchableOpacity
            style={styles.Icon}
            onPress={() => navegation.navigate('Home')}
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
