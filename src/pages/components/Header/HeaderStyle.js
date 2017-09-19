import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  }
 
});
module.exports = styles;
