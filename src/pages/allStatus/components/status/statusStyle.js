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
  headerView: {
    flexDirection: 'row',
    height: height / 10,
  },
  subContainer: {
    height: height,
    width: width,
  },
});
module.exports = styles;
