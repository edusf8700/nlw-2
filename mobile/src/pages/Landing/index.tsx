import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  const { navigate } = useNavigation();

  useEffect(()=> {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    });

  },[]);

  function handleNavigationToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigationToStudyPages() {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg}></Image>

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon}/>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigationToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon}/>
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexôes já realizadas{' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;