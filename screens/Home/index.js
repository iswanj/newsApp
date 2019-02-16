import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import styles from '../../styles/home';

import { getTopNews } from '../../api/services';

import PickerField from '../../components/PickerField';

const countryList = [
  {
    value: 'us',
    label: 'United States'
  },
  {
    value: 'de',
    label: 'Germany'
  },
  {
    value: 'fr',
    label: 'France'
  }
];

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  state = {
    news: [],
    country: 'us'
  };

  componentDidMount() {
    this.getTopNews();
  }

  getTopNews = async (country = 'us') => {
    try {
      const response = await getTopNews(country);
      let responseJson = await response.json();
      console.log('responseJson.articles---', responseJson.articles);
      this.setState({
        news: responseJson.articles
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  handleListItemPress = item => {
    const { navigate } = this.props.navigation;
    navigate('Detail', { item });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.handleListItemPress(item)}
        activeOpacity={0.8}
        style={styles.listItem}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  changeCountry = (name, value) => {
    this.setState({
      country: value
    })
    this.getTopNews(value);
  };

  renderFilter() {
    const { country } = this.state;
    return (
      <View style={styles.filterContainer}>
        <PickerField
          placeholder="Filter By Country"
          name="filter"
          onChange={this.changeCountry}
          value={country}
          border={false}
          data={countryList}
        />
      </View>
    );
  }

  render() {
    const { news } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderFilter()}
          data={news}
          extraData={this.state}
          keyExtractor={item => item.url}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
