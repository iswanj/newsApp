import React, { Component } from "react";
import { View, Text, DatePickerAndroid, TouchableOpacity } from "react-native";

import Icon from "./Icon";

import moment from "moment";

import styles from "../styles/form";


async function showPicker(
  mode,
  name,
  onChange,
  isbackDated,
  minDate,
  maxDate,
  value
) {
  let date;
  try {
    if (isbackDated) {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: value ? new Date(Number(value) * 1000) : new Date(),
        mode,
        minDate,
        maxDate
      });
      // $FlowFixMe
      if (action !== DatePickerAndroid.dismissedAction) {
        date = moment(new Date(year, month, day)).format("YYYY-MM-DD");
        onChange(name, date);
      }
    } else {
      const { action, year, month, day } = await DatePickerAndroid.open({
        minDate: new Date(Number(value) * 1000),
        mode
      });
      // $FlowFixMe
      if (action !== DatePickerAndroid.dismissedAction) {
        date = moment(new Date(year, month, day)).format("YYYY-MM-DD");
        onChange(name, date);
      }
    }
  } catch (e) {
    console.warn("Cannot open date picker", e.message);
  }
}

class DatePicker extends Component {
  static defaultProps = {
    isbackDated: true
  };

  render() {
    const {
      value,
      name,
      isbackDated,
      onChange,
      placeholder,
      mode,
      minDate,
      maxDate,
      disabled
    } = this.props;
    return (
      <View style={styles.inputGroup}>
        <View style={styles.inputElementWrapper}>
          <View style={styles.inputSubWrapper}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.pickerContainer}
                onPress={
                  !disabled
                    ? showPicker.bind(
                        this,
                        mode,
                        name,
                        onChange,
                        isbackDated,
                        minDate,
                        maxDate,
                        value
                      )
                    : () => {}
                }
              >
                <View style={styles.dataTextWrapper}>
                  <Text style={styles.text}>
                    {value !== undefined && value !== ""
                      ? value
                      : placeholder}
                  </Text>
                  {value !== undefined &&
                    !disabled &&
                    value !== "" && (
                      <TouchableOpacity
                        style={styles.dateRemoveBtn}
                        onPress={() => onChange(name, "")}
                      >
                        <Icon
                          name={"times"}
                          size={15}
                          color="#444"
                        />
                      </TouchableOpacity>
                    )}
                  {/*<Text style={styles.text}>{ (!isUndefined(value)) ? formatUsDate(formatDateTime(value)) : 'Pick a date'}</Text>*/}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default DatePicker;
