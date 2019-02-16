import React from "react";
import { View, Image, ScrollView, Text, Linking } from "react-native";

import Button from '../../components/Button';

import styles from "../../styles/detail";

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'News'
  };

  openWebsite(url) {
    Linking.openURL(url);
  }
  
  render() {
    const data = this.props.navigation.state.params.item;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: `${data.urlToImage}`}}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.contentText}>{data.content && data.content.split("[")[0]}</Text>
          </View>
          <View style={styles.meta}>
            <Button onPress={() => this.openWebsite(data.url)}>Full Story</Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}
