import React, { useState } from 'react';
import {
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Colors from '../../../native-base-theme/variables/commonColor';
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
  const [titleText, setTitleText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [error, setError] = useState('');

  const onPress = () => {
    console.log(titleText, bodyText);
    Keyboard.dismiss();
    setError('');

    if (!titleText.trim()) {
      setError('Your Note needs a title!');
    }
  };

  return (
    <View style={styles.container}>
      <Modal
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
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
