import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';

const EventsScreen = () => {

  return  (
    <View style={globalStyles.screen}>
      <Header title="Events" />
      <View style={globalStyles.container}>
        <Text>Events Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EventsScreen;
