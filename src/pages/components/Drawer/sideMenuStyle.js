import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as color from '../../../utils/color';
import * as Family from '../../../utils/fontFamily';

const { height, width } = Dimensions.get('window');
const fontD = width / 400;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: color.DRAWERHEADER,
    height: height / 4,
    marginTop: - height / 4.7,
  },
  accountView: {
    marginTop: -(height / 10),
  },
  content: {
    backgroundColor: '#fff',
  },
  horizontalLine: {
    marginTop: 8,
    borderBottomColor: '#a9a9a9',
    borderTopWidth: 1,
  },
  drawable: {
    marginTop: -width / 3,
    height: height / 3,
    width: width / 1.45,
    backgroundColor: 'transparent',
  },
  drawerIcon: {
    height: 22,
    width: 22,
  },
  drawerProfileIcon: {
    height: 27,
    width: 27,
    marginLeft: -3,
  },
  accountImage: {
    marginTop: 90,
    marginLeft: 10,
  },
  drawableText: {
    flexDirection: 'column',
    flex: 1,
  },
  drawableTextView: {
    marginLeft: width / 3.7,
    marginTop: -height / 10.7,
  },
  name: {
    fontSize: 15 * fontD,
    color: '#FFF',
    fontFamily: Family.MEDIUM,
  },
  accountText: {
    padding: 5,
    marginLeft: 20,
    fontSize: 15,
    fontFamily: Family.REGULAR,
  },
  id: {
    fontSize: 12 * fontD,
    color: '#FFF',
  },
  drawerMenu: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#dcdcdc',
    padding: 8,
    flexDirection: 'row',
  },
  menuList: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  menuListIcon: {
    height: 30,
    width: 30,
  },
  menuListText: {
    fontSize: 15 * fontD,
    color: '#000',
    marginLeft: 20,
    fontFamily: Family.REGULAR,
  },
});
module.exports = styles;
