import { StyleSheet } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    textAlignVertical: 'top',
    height: 50,
    backgroundColor: Colors.containerBgColor,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.brandPrimary,
    borderRadius: 10,
  },
  error: {
    color: Colors.brandDanger,
  },
  button: {
    marginTop: 5,
  },
});

export default styles;
