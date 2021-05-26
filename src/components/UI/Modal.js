import React from 'react';
import {
  Keyboard,
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  modal: {
    margin: 20,
    backgroundColor: Colors.contentStyle,
    borderRadius: 20,
    padding: 20,
    paddingTop: 35,
    alignItems: 'center',
    shadowColor: Colors.brandDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 99,
  },
});

/**
 * Renders a modal
 * @param {Boolean} visible whether the modal is closed/open
 * @param {Function} onClose function to run when user wishes to close modal
 * @param {Function} content returns jsx to render in the modal
 */
const Modal = ({
  visible,
  onClose,
  content,
}) => (
  <RNModal
    onClose={onClose}
    visible={visible}
    transparent
  >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.modal}>
        <Icon
          name="close-o"
          type="evilicon"
          color={Colors.brandPrimary}
          underlayColor={Colors.contentStyle}
          size={40}
          containerStyle={styles.icon}
          onPress={onClose}
        />
        {content()}
      </View>
    </TouchableWithoutFeedback>
  </RNModal>
);

Modal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.func,
};

Modal.defaultProps = {
  visible: false,
  onClose: () => {},
  content: () => <></>,
};

export default Modal;
