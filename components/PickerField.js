// @flow
import React, { Component } from "react";

import { View, Picker } from "react-native";

import styles from "../styles/form";


function HackedPicker(props) {
  const key = React.Children.map(props.children, c => {
    return Object.values(c.props).join(",");
  }).join(";");
  return <Picker {...props} key={key} />;
}

export default class PickerField extends Component {
  static defaultProps = {
    border: true
  }
  state = { selected: "" };

  static defaultProps = {
    data: [],
    value: "0"
  };

  changeHandler = itemValue => {
    const { onChange, value, name } = this.props;
    if (itemValue !== value) {
      onChange(name, itemValue);
    }
  };

  render() {
    const {
      customStyle,
      containerStyle,
      border,
      small,
      data,
      mode,
      enabled,
      placeholder,
      value
    } = this.props;

    const inputGroup = (customStyle && customStyle.inputGroup) || [
      styles.inputGroup,
      small && styles.smallInputGroup
    ];

    const inputStyle = [
      styles.container,
      small && styles.smallContainer,
      !border && styles.noBorder,
      containerStyle
    ];

    return (
      <View style={inputGroup}>
        <View style={styles.inputElementWrapper}>
          <View style={styles.inputSubWrapper}>
            <View style={inputStyle}>
              <HackedPicker
                selectedValue={value}
                onValueChange={this.changeHandler}
                style={{ height: 50 }}
                mode={mode}
                enabled={enabled}
              >
                {this.renderEmptyPickerItem(placeholder)}
                {data
                  .map(item => {
                    return (
                      <Picker.Item
                        key={item.value}
                        label={item.label}
                        value={item.value}
                      />
                    );
                  })}
              </HackedPicker>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderEmptyPickerItem(placeholder = "Select an Item") {
    return <Picker.Item key={0} label={placeholder} value="0" />;
  }
}
