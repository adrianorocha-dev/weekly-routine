import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { FlatList, RectButton, TextInput } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Like } from 'typeorm-expo/browser';

import AppointmentCard from '../../components/AppointmentCard';
import { Appointment } from '../../database/entities/Appointment';

import backgroundImg from '../../assets/background-home.png';
import logoImg from '../../assets/logo.png';

import styles from './styles';

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const isWorkingDay = (day: string) => day !== 'Dom' && day !== 'Sab';

const Home: React.FC = () => {
  const today = new Date();

  const [selectedDay, setSelectedDay] = useState(today.getDay());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigation = useNavigation();

  const fetchAppointments = useCallback(async () => {
    const appointments = await Appointment.find({
      where: { weekDay: selectedDay },
    });

    setAppointments(appointments);
  }, [selectedDay]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      searchAppointments(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!searching) {
      setSearchTerm('');
      fetchAppointments();
    }
  }, [searching, fetchAppointments]);

  function handleCreateAppointment() {
    navigation.navigate('Create');
  }

  function handleOpenAppointment(id: number) {
    navigation.navigate('Detail', { id });
  }

  async function searchAppointments(term: string) {
    const results = await Appointment.find({
      where: [
        { title: Like(`%${searchTerm}%`) },
        { description: Like(`%${searchTerm}%`) },
      ],
    });

    setAppointments(results);
  }

  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.backgroundImage} />

      <View style={styles.header}>
        <View style={[styles.headerRow, styles.headerRowFirst]}>
          <View style={styles.headerButtonsLeft}>
            <RectButton
              style={styles.headerButton}
              rippleColor="#777"
              onPress={() => setSearching(value => !value)}
            >
              <Icon name="search" size={24} />
            </RectButton>
          </View>

          {searching ? (
            <TextInput
              autoFocus={true}
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
            />
          ) : (
            <>
              <Image source={logoImg} />

              <View style={styles.headerButtonsRight}>
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
            </>
          )}
        </View>

        <View style={[styles.headerRow, styles.headerRowLast]}>
          {!searching &&
            weekDays.map((day, index) => (
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

      <FlatList
        contentContainerStyle={styles.content}
        data={appointments}
        keyExtractor={appointment => String(appointment.id)}
        renderItem={({ item }) => (
          <AppointmentCard
            name={item.title}
            color={item.color}
            onPress={() => handleOpenAppointment(item.id)}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await fetchAppointments();
              setRefreshing(false);
            }}
          />
        }
      />
    </View>
  );
};

export default Home;
