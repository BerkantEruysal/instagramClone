import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  getCredentials,
  getTokensFromEncryptedStorage,
} from '../api/AuthenticationApi';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setCredentials} from '../redux/slices/User';

export default function Loading(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    getTokensFromEncryptedStorage(dispatch, accessToken => {
      if (accessToken !== null && accessToken != undefined) {
        getCredentials(accessToken, data => {
          dispatch(setCredentials(data));
        });
      }
    });
    props.setIsLoading(false);
  }, []);
  return (
    <View>
      <TouchableOpacity onPress={() => props.setIsLoading(false)}>
        <Text>Loading</Text>
      </TouchableOpacity>
    </View>
  );
}
