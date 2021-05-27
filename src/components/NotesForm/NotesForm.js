import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addNote,
} from '../../redux/actions/articleActions';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
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
  const dispatch = useDispatch();
  const [titleText, setTitleText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [callbackModalVisible, setCallbackModalVisible] = useState(false);
  const [error, setError] = useState('');

  const onPress = () => {
    console.log(titleText, bodyText);
    Keyboard.dismiss();
    setError('');

    if (!titleText.trim()) {
      setError('Your Note needs a title!');
      return;
    }

    dispatch(addNote(
      {
        title: titleText,
        body: bodyText,
      },
      () => setCallbackModalVisible(true),
    ));
  };

  const closeModal = () => {
    setError('');
    onClose();
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={callbackModalVisible}
        onClose={() => {
          setCallbackModalVisible(false);
          closeModal();
        }}
        content={() => (
          <Text style={styles.largeText}>
            Success! Note Added!
          </Text>
        )}
      />
      <Modal
        visible={visible}
        onClose={closeModal}
        content={() => (
          <>
            <TextInput
              placeholder="Title"
              autoCapitalize="words"
              maxLength={100}
              onChangeText={(text) => setTitleText(text)}
              underlineColorAndroid="transparent"
              style={[styles.textInput, { textAlignVertical: 'center' }]}
            />
            <TextInput
              multiline
              maxLength={500}
              placeholder="Add text to your note!"
              underlineColorAndroid="transparent"
              onChangeText={(text) => setBodyText(text)}
              style={[styles.textInput, { height: 100 }]}
            />
            <Text style={styles.error}>
              {error}
            </Text>
            <Button
              text="Add Note"
              style={styles.button}
              onPress={onPress}
            />
          </>
        )}
      />
    </View>
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
