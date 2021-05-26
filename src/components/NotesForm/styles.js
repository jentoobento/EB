import { StyleSheet } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
