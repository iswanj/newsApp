import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';


import styles from '../../styles/home';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search Result'
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.handleListItemPress(item)} activeOpacity={0.8} style={styles.listItem}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  handleListItemPress = item => {
    const { navigate } = this.props.navigation;
    navigate("Detail", { item });
  };

  render() {
    const data = this.props.navigation.state.params.result;
    console.log("props---", data);
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          extraData={this.state}
          keyExtractor={item => item.url}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
