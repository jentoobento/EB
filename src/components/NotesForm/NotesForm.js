import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

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

export default NotesForm;
