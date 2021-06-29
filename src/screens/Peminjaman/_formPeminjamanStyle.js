import {StyleSheet} from 'react-native';
import colors from '../../utils/constant/color';

export default StyleSheet.create({
  safeAreaContainer: {
    flexGrow: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  container: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: colors.P1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
  },
  arrow: {width: 24, height: 24},
  headerWrapper: {
    flex: 1,
    height: 120,
    backgroundColor: colors.P2,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  textSection: {
    color: colors.P3,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 40,
    paddingHorizontal: 32,
  },
  wrapTextInput: {
    paddingBottom: 24,
  },
  inputWrapper: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.P4,
    color: colors.P4,
    paddingHorizontal: 8,
  },
  labelInput: {
    color: colors.P3,
    paddingBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: 32,
  },
  buttonWrapper: {
    flex: 1,
    height: 40,
    backgroundColor: colors.P1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
