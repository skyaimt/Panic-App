import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import * as color from '../../utils/color';
import * as Family from '../../utils/fontFamily';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  headerView: {
    flexDirection: 'row',
    height: height / 10,
  },
  buttonView: {
    backgroundColor: color.NEXTTEXT,
    height: height / 12,
    width: width / 1.2,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: Family.REGULAR,
    fontSize: 18,
  },
  middleView: {
    height: height / 1.2,
  },
  secondMiddleView: {
    flex: 9,
    marginTop: height / 4,
  },
  background: {
    height: height,
    width: width,
  },
  subContainer: {
    height: height,
    width: width,
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
  listView: {
    height: height / 2.5,
    width: width / 1.3,
    marginTop: height / 4.3,
    marginLeft: width / 7.9,
    backgroundColor: '#fff',
  },
  ModalView: {
    height: height / 1.3,
    width: width / 1.3,
  },
  scrollView: {
   backgroundColor: '#fff',
  },
  phoneList: {
    margin: 10,
  }
    
});
module.exports = styles;
