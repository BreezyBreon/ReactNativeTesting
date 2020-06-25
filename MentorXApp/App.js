import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from './src/constants/colors';

import AccountScreen from './src/screens/AccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import EventsScreen from './src/screens/EventsScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import MentoringScreen from './src/screens/MentoringScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';

const mainFlow = createBottomTabNavigator({
  Home: {screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Entypo
            name="home"
            size={24}
            color={tabInfo.tintColor}
            />
        );
      }
    }
  },
  Events: {screen: EventsScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Entypo
            name="calendar"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      }
    }
  },
  Mentoring: {screen: MentoringScreen,
  navigationOptions: {
    tabBarIcon: tabInfo => {
      return (
        <MaterialIcons
          name="people"
          size={24}
          color={tabInfo.tintColor}
        />
      );
    }
  }
},
  Account: {screen: AccountScreen,
  navigationOptions: {
    tabBarIcon: tabInfo => {
      return (
        <MaterialCommunityIcons
          name="account"
          size={24}
          color={tabInfo.tintColor}
        />
      );
    }
  }
},
},{
  tabBarOptions: {
    activeBackgroundColor: Colors.backgroundBody,
    inactiveBackgroundColor: Colors.backgroundBody,
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.inactTintColor,
    labelStyle: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  }
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator)}} />
    </AuthProvider>
  );
};
