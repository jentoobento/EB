import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { authorize } from 'react-native-app-auth';
import { CLIENT_ID, CLIENT_SECRET } from '@env';
import styles from './styles';

const AccountBox = ({ account }) => {
  const config = {
    redirectUrl: 'com.reactnativestarterkit://oauthredirect',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    scopes: ['identity'],
    additionalHeaders: { Accept: 'application/json' },
    serviceConfiguration: {
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      revocationEndpoint:
        `https://github.com/settings/connections/applications/${CLIENT_ID}`,
    },
  };

  const onPress = () => {
    console.log('go to ', account.url);

    authorize(config).then((response) => console.log(response));
  };

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
