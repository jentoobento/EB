import React, { useEffect } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  authorizeThirdParty,
} from '../../redux/actions/articleActions';
import Colors from '../../../native-base-theme/variables/commonColor';
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

  const onPress = () => {
    dispatch(authorizeThirdParty(account.config));
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
      disabled={account.disabled}
      style={styles.container}
      onPress={onPress}
    >
      {account.disabled && (
        <View style={styles.disabledBanner}>
          <Text style={styles.disabledText}>
            Coming Soon!
          </Text>
        </View>
      )}
      <Icon
        name={account.fontAwesomeIcon}
        type="font-awesome"
        size={55}
        color={Colors.brandPrimary}
        iconStyle={styles.icon}
      />
      <Text style={styles.text}>
        {account.name}
      </Text>
    </TouchableOpacity>
  );
};

AccountBox.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string,
    fontAwesomeIcon: PropTypes.string,
    disabled: PropTypes.bool,
    config: PropTypes.shape({}),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

AccountBox.defaultProps = {
  account: {
    name: '',
    fontAwesomeIcon: 'question-circle',
    disabled: false,
    config: {},
  },
  navigation: {
    navigate: () => {},
  },
};

export default AccountBox;
