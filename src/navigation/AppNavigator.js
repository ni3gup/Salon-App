import { React } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomDrawerNavigator from "../components/CustomDrawerNavigator";
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Colors from '../constants/colors';
import Login from '../screens/Login';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle: { fontFamily: 'OpenSans-Bold' },
  headerBackTitleStyle: { fontFamily: 'OpenSans-Regular' },
  headerTintColor: 'white',
};

const AppNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    defaultNavigationOptions,
  },
);

const MenuNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: () => (
          <Icon name="md-home" />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },
  },
);

const MainNavigator = createSwitchNavigator({
  Splash: Splash,
  App: AppNavigator,
  Menu: MenuNavigator
}, {
  initialRouteName: 'Splash'
});

export default createAppContainer(MainNavigator);
