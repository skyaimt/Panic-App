import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addImage: {
    height: 30,
    width: 30,
  },
  textView: {
    margin: 10,
  },
  addInputView: {
    flexDirection: 'row',
  },
  inputField: {
    height: 40,
    marginLeft: 10,
    width: width / 1.3,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});
module.exports = styles;
