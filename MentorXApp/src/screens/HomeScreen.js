import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Colors from '../constants/colors';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';

const HomeScreen = () => {
  return (
    <View style={globalStyles.screen}>
      <StatusBar backgroundColor={Colors.statusBar} />
      <Header title="MentorX"/>
      <View style={globalStyles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.circle}>
            <Image style={styles.imageStyle} source={require('../constants/images/XLogoSq.png' )} resizeModel='cover'/>
          </View>
        </View>
        <Text style={globalStyles.title}> Welcome to Mentorx!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 75,
    alignItems: 'center',
    marginBottom: 15
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    borderColor: Colors.primary,
    borderWidth: 3,
    backgroundColor: Colors.backgroundBody,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 50,
    height: 50,
  }
});

export default HomeScreen;
