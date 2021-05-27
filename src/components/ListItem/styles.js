import { StyleSheet } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    margin: 10,
    backgroundColor: Colors.contentStyle,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.brandPrimary,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  text: {
    fontSize: 16,
    color: Colors.brandPrimary,
  },
  lockIcon: {
    color: Colors.brandPrimary,
  },
  emptySpace: {
    width: 1,
  },
});

export default styles;
