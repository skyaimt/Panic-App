import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
  	flex:1,
  },
  middleView: {
  	flex: 8,
  },
  footerView: {
  	flex: 1,
  }
 
});
module.exports = styles;
