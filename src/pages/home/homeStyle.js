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
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
});
module.exports = styles;
