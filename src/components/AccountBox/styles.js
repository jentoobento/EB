import { StyleSheet } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: Colors.contentStyle,
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.brandPrimary,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.brandPrimary,
  },
  disabledBanner: {
    zIndex: 99,
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.brandWarning,
    opacity: 0.8,
    transform: [{ rotate: '-5deg' }],
  },
  disabledText: {
    color: Colors.contentStyle,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
