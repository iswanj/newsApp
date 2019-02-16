import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking } from 'react-native';

import styles from '../../styles/home';

import { getUSPublishers } from '../../api/services';

export default class Publishers extends React.Component {
  static navigationOptions = {
    title: 'US Publishers'
  };

  state = {}

  componentDidMount() {
    this.getPublishers();
  }

  getPublishers = async () => {
    try {
      const response = await getUSPublishers();
      let responseJson = await response.json();
      this.setState({
        publishers: responseJson.sources
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(item.url)}
        activeOpacity={0.8}
        style={styles.listItem}
      >
        <Text style={styles.listItemTitle}>{item.name}</Text>
        <Text style={styles.listItemDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { publishers } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={publishers}
          extraData={this.state}
          keyExtractor={item => item.url}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}