import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {FormMasuk} from './../src/screens/Autentikasi';

const MainStack = createStackNavigator({
  Home: {
    screen: FormMasuk,
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
