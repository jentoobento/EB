import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brandPrimary,
    borderRadius: 10,
  },
  text: {
    color: Colors.contentStyle,
  },
});

/**
 * Renders a button with text
 * @param {String} text text to display to user
 * @param {Function} onPress function to run when this component is pressed
 * @param {Object} style extra styles from props 
 */
const Button = ({
  text,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { ...style }]}
  >
    <Text style={styles.text}>
      {text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  text: '',
  onPress: () => {},
  style: {},
};

export default Button;
