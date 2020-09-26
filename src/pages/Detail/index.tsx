import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import backgroundImage from '../../assets/background-detail-page.png';
import Logo from '../../assets/logo.png';
import line from '../../assets/Line.png';
import styles from './styles';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const dataTest = {
  day: 'Segunda',
  title: 'Trabalho de PDSI1',
  timeStart: '08:00',
  timeEnd: '12:00',
  description:
    'O cuidado em identificar pontos críticos no julgamento imparcial \
  das eventualidades causa impacto indireto na reavaliação das direções preferenciais \
  no sentido do progresso.O cuidado em identificar pontos críticos no julgamento imparcial \
  das eventualidades causa impacto indireto na reavaliação das direções preferenciais \
  no sentido do progresso.O cuidado em identificar pontos críticos no julgamento imparcial \
  das eventualidades causa impacto indireto na reavaliação das direções preferenciais \
  no sentido do progresso.O cuidado em identificar pontos críticos no julgamento imparcial \
  das eventualidades causa impacto indireto na reavaliação das direções preferenciais \
  no sentido do progresso.',
  tagColor: '#BE45F8',
};

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const [day, setDay] = useState('');
  const [title, setTitle] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [description, setDescription] = useState('');
  const [tagColor, setTagColor] = useState('#45EDF8');

  const data = {
    day,
    title,
    timeStart,
    timeEnd,
    description,
    tagColor,
  };

  useEffect(() => {
    setDay(dataTest.day);
    setTimeStart(dataTest.timeStart);
    setTimeEnd(dataTest.timeEnd);
    setTitle(dataTest.title);
    setDescription(dataTest.description);
    setTagColor(dataTest.tagColor);
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
              onPress={() => navigation.navigate('Edit')}
            >
              <Icon name="edit" size={24} color="#FF5D5D" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
              <Icon name="delete" size={24} color="#FF5D5D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titlePage}>
          <Text style={styles.textTile}> {title} </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.line}>
          <Image source={line} style={styles.imgLine} resizeMode="stretch" />
        </View>

        <View style={styles.tagTime}>
          <View style={styles.tag}>
            <Icon name="lens" size={12} color="#FF5D5D" />
            <Text>{timeStart}</Text>
          </View>

          <View style={styles.tag}>
            <Icon name="lens" size={12} color="#FF5D5D" />
            <Text>{timeEnd}</Text>
          </View>
        </View>

        <View style={styles.detail}>
          <View style={styles.task}>
            <ScrollView
              style={{ flex: 1, marginBottom: '11%' }}
              showsVerticalScrollIndicator={true}
            >
              <View style={styles.tagColor}>
                <Icon name="lens" size={25} color={tagColor} />
              </View>

              <Text style={styles.headerTask}>
                {day} das {timeStart} às {timeEnd}
              </Text>

              <Text style={styles.description}>{description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
