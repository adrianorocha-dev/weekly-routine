import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/background-home.png';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import AppointmentCard from '../../components/AppointmentCard';

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const isWorkingDay = (day: string) => day !== 'Dom' && day !== 'Sab';

const Home: React.FC = () => {
  const today = new Date();

  const [selectedDay, setSelectedDay] = useState(today.getDay());

  const navigation = useNavigation();

  function handleCreateAppointment() {
    navigation.navigate('Create');
  }

  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.backgroundImage} />

      <View style={styles.header}>
        <View style={[styles.headerRow, styles.headerRowFirst]}>
          <RectButton style={styles.headerButton} rippleColor="#777">
            <Icon name="search" size={24} />
          </RectButton>

          <Image source={logoImg} />

          <View style={styles.button}>
            <RectButton
              style={styles.headerButton}
              rippleColor="#777"
              onPress={handleCreateAppointment}
            >
              <Icon name="add" size={24} color="#FF5D5D" />
            </RectButton>

            <RectButton
              style={styles.headerButton}
              rippleColor="#777"
              onPress={() => navigation.navigate('Report')}
            >
              <Icon name="pie-chart" size={24} color="#FF5D5D" />
            </RectButton>
          </View>
        </View>

        <View style={[styles.headerRow, styles.headerRowLast]}>
          {weekDays.map((day, index) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayOfWeek,
                selectedDay === index ? { backgroundColor: '#FF5D5D' } : {},
                today.getDay() === index
                  ? {
                      borderWidth: 1,
                      borderColor: '#FF5D5D',
                      borderStyle: 'solid',
                    }
                  : {},
              ]}
              activeOpacity={0.5}
              onPress={() => setSelectedDay(index)}
            >
              <Text
                style={[
                  styles.dayOfWeekText,
                  !isWorkingDay(day) ? styles.dayOfWeekEndText : {},
                  selectedDay === index ? { color: '#fff' } : {},
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.todayDateText}>{today.toLocaleDateString()}</Text>
      </View>

      <View style={styles.content}>
        <AppointmentCard
          name="Compromisso teste 1"
          color="blue"
          onPress={() => navigation.navigate('Detail')}
        />
        <AppointmentCard
          name="Compromisso teste 2"
          color="green"
          onPress={() => navigation.navigate('Detail')}
        />
        <AppointmentCard
          name="Compromisso teste 3"
          color="yellow"
          onPress={() => navigation.navigate('Detail')}
        />
        <AppointmentCard
          name="Compromisso teste 4"
          color="red"
          onPress={() => navigation.navigate('Detail')}
        />
        <AppointmentCard
          name="Compromisso teste 5"
          color="black"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    </View>
  );
};

export default Home;
