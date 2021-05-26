import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const AccountBox = ({ account }) => {
  const onPress = () => {
    console.log('go to ', account.url)
  };

  return (
    <TouchableOpacity
      key={account.name}
      style={styles.container}
      onPress={onPress}
    >
      <Text>{account.name}</Text>
    </TouchableOpacity>
  );
};

export default AccountBox;
