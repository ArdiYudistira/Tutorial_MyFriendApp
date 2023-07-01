import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ColorCustom from './ColorCustom';

const TextCustom = ({size, type, color, style, children, ...other}) => {
  return (
    <Text {...other} style={styles.textstyle({size, type, color, style})}>
      {children}
    </Text>
  );
};

export default TextCustom;

const styles = StyleSheet.create({
  textstyle: ({size, type, color, style}) => ({
    fontSize:
      size === 'title'
        ? 16
        : size === 'label'
        ? 14
        : size === 'description'
        ? 12
        : 10,
    color: ColorCustom(color),
    fontWeight: type === 'bold' ? type : null,
    fontFamily: 'Lato-Regular',
    ...style,
  }),
});
