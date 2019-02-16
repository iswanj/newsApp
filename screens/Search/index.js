import React from 'react';
import { View, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import styles from '../../styles/search';

import TextField from '../../components/TextField';
import DatePicker from '../../components/DatePicker';
import PickerField from '../../components/PickerField';
import Button from '../../components/Button';

import { searchNews } from '../../api/services';

const sortOptions = [
  {
    value: "Relevancy",
    label: "Relevancy"
  },
  {
    value: "popularity",
    label: "Popularity"
  },
  {
    value: "publishedAt",
    label: "Published At"
  }
];

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search'
  };

  state = {}

  handleField = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSearch = async () => {
    if (!this.state.keyword) {
      Alert.alert(
        'Empty Keyword',
        'Should type something for search keyword',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else {
      try {
        let response = await searchNews({ ...this.state });
        let result = await response.json();
        if (result.articles.length === 0) {
          Alert.alert(
            'No Result Found',
            'There is nothing to show. Please try with diffrent options.',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]
          );
        }
        this.props.navigation.navigate("SearchResult", { result: result.articles }) 
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  render() {
    const { fromDate, keyword, endDate, sort } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <TextField
            placeholder="Keyword"
            name="keyword"
            onChange={this.handleField}
            value={keyword}
          />
          <DatePicker
            placeholder="Pick a Start Date"
            name="fromDate"
            onChange={this.handleField}
            value={fromDate}
          />
          <DatePicker
            placeholder="Pick a End Date"
            name="endDate"
            onChange={this.handleField}
            value={endDate}
          />
          <PickerField
            placeholder="Sort by"
            name="sort"
            onChange={this.handleField}
            value={sort}
            border={true}
            data={sortOptions}
          />
          <Button onPress={() => this.handleSearch()}>Search</Button>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
