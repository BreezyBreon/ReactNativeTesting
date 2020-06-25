import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Header from '../components/Header';
import { globalStyles } from '../styles/global';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return  (
    <View style={globalStyles.screen}>
      <Header title="Profile" />
      <View style={globalStyles.container}>
        <Text>Profile Screen</Text>
        <Button title="Sign Out" onPress={signout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
