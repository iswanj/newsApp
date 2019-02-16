import React, { Fragment } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { RkButton } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import SearchScreen from './screens/Search';
import SearchResultsScreen from './screens/Search/result';
import PublishersScreen from './screens/Publishers';

import colors from './styles/colors';
import styles from './styles/common';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
    Search: { screen: SearchScreen },
    SearchResult: { screen: SearchResultsScreen },
    Publishers: { screen: PublishersScreen }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: (
          <Fragment>
            <RkButton
              onPress={() => navigation.navigate('Publishers')}
              rkType="clear"
              style={[styles.iconButton, { marginLeft: 0 }]}
            >
              <Icon style={[styles.icon, { fontSize: 24 }]} name="list-ul" />
            </RkButton>
            <RkButton
              onPress={() => navigation.navigate('Search')}
              rkType="clear"
              style={[styles.iconButton, { marginLeft: 0 }]}
            >
              <Icon style={[styles.icon, { fontSize: 24 }]} name="search" />
            </RkButton>
          </Fragment>
        ),
        headerStyle: {
          backgroundColor: colors.navBar
        },
        headerTintColor: colors.headerTextColor,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      };
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
