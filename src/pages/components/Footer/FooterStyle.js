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
    flexDirection:'row',
    backgroundColor: color.HEADER,
    justifyContent: 'space-between'
  },
 
});
module.exports = styles;
