// @flow
import React, { Component } from "react";

import styles from "../styles/button";

import { Text, ActivityIndicator, TouchableOpacity } from "react-native";


class Button extends Component {
  static defaultProps = {
    onPress: () => {},
    onLongPress: () => {},
    transparent: false,
    iconBtn: false,
    loading: false,
    loadingHeight: 20,
    disabled: false,
    style: {}
  };

  _handlePress() {
    this.props.onPress();
  }

  renderLoading() {
    return (
      <ActivityIndicator
        animating={this.props.loading}
        style={[{ height: this.props.loadingHeight }]}
        size="small"
        color="#FFF"
      />
    );
  }

  render() {
    const { transparent, loading, disabled, style, iconBtn } = this.props;
    const btnStyle = [
      !transparent ? styles.containerStyle : styles.transparent,
      iconBtn && styles.iconBtn,
      style
    ];
    const btnTextStyle = [
      !transparent ? styles.btnTextDefault : styles.btnTextTransparent
    ];
    return (
      <TouchableOpacity
        style={btnStyle}
        activeOpacity={0.7}
        onPress={() => !loading && !disabled && this._handlePress()}
      >
        {loading ? (
          this.renderLoading()
        ) : (
          <Text style={btnTextStyle}>{this.props.children}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Button;
