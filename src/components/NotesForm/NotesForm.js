import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Renders a modal with a fillable form
 * @param {Boolean} visible whether the modal is closed/open
 * @param {Function} onClose function to run when user wishes to close modal
 */
const NotesForm = ({
  visible,
  onClose,
}) => {

  return (
    <Modal onClose={onClose} visible={visible}>
      <Text>hi</Text>
      <TouchableOpacity onPress={onClose}>
        <Text>Close me</Text>
      </TouchableOpacity>
    </Modal>
  );
};

NotesForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

NotesForm.defaultProps = {
  visible: false,
  onClose: () => {},
};

export default NotesForm;
