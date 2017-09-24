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
  textView: {
    height: width / 5,
    width: width - 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: 0,
  },
  copylikeView: {
    flexDirection: 'row',
    height: width / 5,
    width: width - 10,
    margin: 5,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    justifyContent: 'space-between',
  }
});
module.exports = styles;
