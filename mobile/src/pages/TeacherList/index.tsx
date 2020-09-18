import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';


const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritesTeachers = JSON.parse(response);
        const favoritesTeachersIds = favoritesTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritesTeachersIds);
      }
    })
  };

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFilterSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    
    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}
      >
        { isFilterVisible && (
          <ScrollView>
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
                value={subject}
                onChangeText={text => setSubject(text)}
              />
              
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual o dia?"
                    placeholderTextColor="#c1bccc"
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                  />  
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual a horário?"
                    placeholderTextColor="#c1bccc"
                    value={time}
                    onChangeText={text => setTime(text)}
                  />
                </View>
              </View>

              <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          </ScrollView>
        )}
      </PageHeader>

       <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ 
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
       >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
           />
          ) 
        })}  
        
       </ScrollView>
      
    </View>
  );  
};

export default TeacherList;