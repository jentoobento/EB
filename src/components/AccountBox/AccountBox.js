import React, { useEffect } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CLIENT_ID, CLIENT_SECRET } from '@env';
import {
  authorizeThirdParty,
} from '../../redux/actions/articleActions';
import styles from './styles';

const AccountBox = ({ account, navigation }) => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.articles.userToken);
  const errorMessage = useSelector((state) => state.articles.errorMessage);

  const config = {
    redirectUrl: 'com.reactnativestarterkit://oauthredirect',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scopes: ['user', 'repo'],
    additionalHeaders: { Accept: 'application/json' },
    serviceConfiguration: {
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      revocationEndpoint:
        `https://github.com/settings/connections/applications/${CLIENT_ID}`,
    },
  };

  const onPress = () => {
    dispatch(authorizeThirdParty(config));
  };

  useEffect(() => {
    if (userToken) {
      navigation.navigate('listView');
    }
  }, [userToken]);

  useEffect(() => {
    if (errorMessage) {
      Alert.alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text>{account.name}</Text>
    </TouchableOpacity>
  );
};

export default AccountBox;
