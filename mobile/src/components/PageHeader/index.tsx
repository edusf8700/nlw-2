import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'; 
import logoIcon from '../../assets/images/logo.png'; 

import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  function hadleGoBack() {
    console.log('ok')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={hadleGoBack}>
          <Image source={backIcon} resizeMode='contain'/>
        </BorderlessButton>

        <Image source={logoIcon} resizeMode='contain'/>
      </View>
      
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeader;