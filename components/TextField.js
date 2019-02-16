// @flow
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/form";


class TextField extends Component {
  static defaultProps = {
    editable: true,
    autoFocus: false,
    multiline: false,
    small: false,
    selectTextOnFocus: true
  };

  setKeyboardType(keyboardType) {
    if (!keyboardType) {
      return "default";
    } else {
      return keyboardType;
    }
  }

  onTextChange(text) {
    const { onChange, name } = this.props;
    onChange(name, text);
  }
  render() {
    //eslint-disable-next-line
    const {
      customStyle,
      numberOfLines,
      multiline,
      value,
      autoFocus,
      blurOnSubmit,
      small,
      containerStyle,
      name,
      onChange,
      onSubmitEditing,
      placeholder,
      style,
      selectTextOnFocus,
      noBottomMargin,
      editable,
      error,
      refInput,
      ...rest
    } = this.props;
    const valueString = value ? value.toString() : "";
    const inputGroup = (customStyle && customStyle.inputGroup) || [
      styles.inputGroup,
      small && styles.smallInputGroup,
      noBottomMargin && styles.noBottomMargin
    ];
    const inputStyle = [
      styles.container,
      small && styles.smallContainer,
      !editable && styles.editableFalseStyle,
      containerStyle
    ];
    const labelStyle = [styles.label, small && styles.smallLabel];
    const inputStyles = [styles.input, small && styles.samllInput, style];
    return (
      <View style={inputGroup}>
        <View style={styles.inputElementWrapper}>
          <View style={styles.inputSubWrapper}>
            <View style={inputStyle}>
              <TextInput
                underlineColorAndroid="transparent"
                blurOnSubmit={blurOnSubmit || true}
                selectTextOnFocus={selectTextOnFocus}
                autoFocus={autoFocus}
                editable={editable}
                autoCorrect={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={inputStyles}
                value={valueString}
                autoCapitalize={`none`}
                onChangeText={this.onTextChange.bind(this)}
                placeholder={placeholder}
                placeholderTextColor="#999"
                onSubmitEditing={onSubmitEditing}
                ref={refInput}
                {...rest}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TextField;
