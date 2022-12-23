import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import DateTimePicker, { AndroidNativeProps } from '@react-native-community/datetimepicker';

import { Container } from "./styles";

export interface InputDateProps extends AndroidNativeProps {
  value: Date;
  placeholder?: string;
}

export function InputDate({ value, ...rest }: InputDateProps) {
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={value}
      is24Hour={true}
      {...rest}
    />
  )
}