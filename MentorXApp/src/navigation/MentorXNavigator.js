import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';

import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import EventsScreen from '../screens/EventsScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';
import MentoringScreen from '../screens/MentoringScreen';

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

const MentorXNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow
});

export default createAppContainer(MentorXNavigator);
