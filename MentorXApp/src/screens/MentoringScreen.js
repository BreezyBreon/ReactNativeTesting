import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';

const MentoringScreen = () => {

  return  (
    <View style={globalStyles.screen}>
      <Header title="Mentoring" />
      <View style={globalStyles.container}>
        <Text>Mentoring Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MentoringScreen;
