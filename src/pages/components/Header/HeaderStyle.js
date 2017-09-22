import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import * as color from '../../../utils/color';
import * as Family from '../../../utils/fontFamily';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.HEADER,
    justifyContent: 'space-between'
  },
  leftIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  titleStyle: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: Family.THIN
  },
  leftIcon: {
    margin: 10,
    height: 30,
    width: 30,
    alignSelf: 'center',
  }
 
});
module.exports = styles;
