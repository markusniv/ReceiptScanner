import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {trpc} from '../trpc';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ERROR, USER_SESSION} from '../../utils/constants';
import {SessionState} from '../../utils/enums';
import {LoginScreenProps} from '../navigation/types';
import {retrieveUserSession} from '../helperFunctions/helperfunctions';
import {Role} from '@prisma/client';

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 12,
    width: '80%',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
});
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [bearerToken, setBearerToken] = useState('');
  const [error, setError] = useState('');

  const authentication = trpc.auth.authentication.useMutation();
  const registerUser = trpc.auth.register.useMutation();
  const loginUser = trpc.auth.login.useMutation();

  useEffect(() => {
    retrieveUserSession().then(result => {
      if (result !== undefined) {
        if (bearerToken === '') {
          setBearerToken(result);
        }
        authentication.mutate({id: result.id, accessToken: result.accessToken});
      }
    });
  }, [bearerToken]);

  useEffect(() => {
    switch (authentication.data?.sessionState) {
      case SessionState.SUCCESS:
        const {accessToken, id, username, role} = bearerToken;
        navigation.navigate('Receipts', {id, username, role, accessToken});
        break;
      case SessionState.FAILED:
        setError('Authentication failed, please try logging in again.');
        break;
      default:
        setError('Please login.');
        break;
    }
  }, [authentication.data]);

  useEffect(() => {
    const data = loginUser.data ?? registerUser.data;
    // @ts-ignore
    const accessToken = data?.accessToken;
    const username = data?.user?.username;
    const id = data?.user?.id;
    const role = data?.user?.role;

    const tokenObject = {
      accessToken,
      username,
      role,
      id,
    };

    async function setToken() {
      try {
        await EncryptedStorage.setItem(
          USER_SESSION,
          JSON.stringify(tokenObject),
        );
      } catch (e) {
        setError(e as string);
      }
    }

    if (accessToken) {
      setToken().then(() => {
        setBearerToken(tokenObject);
      });
    } else {
      if (data?.code === ERROR) {
        setError(data.message);
      }
    }
  }, [registerUser.data, loginUser.data]);

  return (
    <View
      style={{
        alignItems: 'center',
        margin: 20,
        justifyContent: 'center',
        height: '100%',
      }}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Login</Text>
        <TextInput
          style={styles.input}
          value={loginUsername}
          placeholder={'Username'}
          onChangeText={setLoginUsername}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={loginPassword}
          placeholder={'Password'}
          onChangeText={setLoginPassword}
        />
        <Button
          title={'Login'}
          onPress={() => {
            loginUser.mutate({
              username: loginUsername,
              password: loginPassword,
            });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Register</Text>
        <TextInput
          style={styles.input}
          value={registerUsername}
          placeholder={'Username'}
          onChangeText={setRegisterUsername}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={registerPassword}
          placeholder={'Password'}
          onChangeText={setRegisterPassword}
        />
        <Button
          title={'Register'}
          onPress={() => {
            registerUser.mutate({
              username: registerUsername,
              password: registerPassword,
            });
          }}
        />
      </View>
      <Text>{error !== '' && error}</Text>
    </View>
  );
};

export default LoginScreen;
