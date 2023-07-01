import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ColorCustom from './ColorCustom';

const ButtonCustom = ({type, color, children, style, ...otherprops}) => {
  return (
    <TouchableOpacity
      {...otherprops}
      style={styles.buttonStyle({type, color, style})}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  buttonStyle: ({type, color, style}) => ({
    borderRadius: type === 'rounded' ? 20 : null,
    backgroundColor: ColorCustom(color),
    ...style,
  }),
});
