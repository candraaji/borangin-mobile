import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
  safeArea: {flex: 1, backgroundColor: colors.P1},
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  image: {width: 126, height: 115},
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    paddingBottom: 10,
  },
  bodyText: {fontSize: 15, color: colors.white},
  underlineText: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    paddingTop: 8,
  },
  wrapTextInput: {
    paddingTop: 16,
  },
  inputWrapper: {
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.white,
    paddingHorizontal: 8,
  },
  textHeader: {
    color: colors.P1,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 8,
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
