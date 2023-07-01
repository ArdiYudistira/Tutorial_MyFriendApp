import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import {Logo} from '../../assets/img';
import ButtonCustom from '../../components/ButtonCustom';
import TextCustom from '../../components/TextCustom';
import formValidator from '../../utils/formValidator';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const onHandleChange = ({value, name}) => {
    const validate = formValidator({value, name});
    setError({...error, [name]: !validate});
    setData({...data, [name]: value});
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextCustom
        size={'label'}
        type={'bold'}
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        Email
      </TextCustom>
      <View style={styles.cardinput}>
        <TextInput
          name="email"
          placeholder="Email"
          style={styles.input}
          value={data.email}
          onChangeText={e => onHandleChange({value: e, name: 'email'})}
        />
        {error.email && (
          <TextCustom size={'small'} type={'regular'} color={'danger'}>
            Email invalid
          </TextCustom>
        )}
      </View>

      <TextCustom
        size={'label'}
        type={'bold'}
        style={{
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        Password
      </TextCustom>
      <View style={styles.cardinput}>
        <TextInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={data.password}
          onChangeText={e => onHandleChange({value: e, name: 'password'})}
        />
        {error.password && (
          <TextCustom size={'small'} type={'regular'} color={'danger'}>
            Minimum 6 character password
          </TextCustom>
        )}
      </View>
      <View style={styles.cardButton}>
        <ButtonCustom
          type={null}
          color={'primary'}
          style={{
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <TextCustom size={'description'} type={'bold'} color={'white'}>
            Login
          </TextCustom>
        </ButtonCustom>
        <ButtonCustom
          type={null}
          color={'danger'}
          style={{
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <TextCustom size={'description'} type={'bold'} color={'white'}>
            Register
          </TextCustom>
        </ButtonCustom>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 80,
    height: 80,
  },
  cardinput: {
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
  },
  cardButton: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
