import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { revokeThirdParty } from '../../redux/actions/articleActions';

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

/**
 * Renders a logout icon (box with arrow pointing away)
 * Revokes access token when pressed
 */
const LogoutIcon = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.articles.userToken);
  // TODO: allow selection of different configs
  const githubConfig = useSelector((state) => state.articles.accounts[0].config);

  return (
    <Icon
      name="logout-variant"
      type="material-community"
      iconStyle={styles.icon}
      onPress={() => {
        dispatch(revokeThirdParty(
          githubConfig,
          { tokenToRevoke: userToken },
          () => Actions.reset('home'),
          (status) => Alert.alert(`Having trouble logging you out. Please try again. [${status}]`),
        ));
      }}
    />
  );
};

export default LogoutIcon;
