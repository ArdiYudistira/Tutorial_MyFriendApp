import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Logo} from '../../assets/img';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 2000);
  }, [props.navigation]);
  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('screen').width,
    height: 40,
  },
});
