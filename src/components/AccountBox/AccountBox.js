import React, { useEffect } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CLIENT_ID, CLIENT_SECRET } from '@env';
import PropTypes from 'prop-types';
import {
  authorizeThirdParty,
} from '../../redux/actions/articleActions';
import styles from './styles';

/**
 * Renders a button of an account, ie. "github", "spotify", etc.
 * When pressed, will attempt to sign in to that account
 * If sign in was successful, navigates to the listView screen
 * @param {Object} account the account from redux
 * @param {Object} navigation the navigation object from NavigationContainer
 */
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

AccountBox.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

AccountBox.defaultProps = {
  account: {
    name: '',
  },
  navigation: {
    navigate: () => {},
  },
};

export default AccountBox;
