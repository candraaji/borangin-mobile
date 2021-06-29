/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {FormMasuk} from './src/screens/Autentikasi/FormMasuk';
import {FormPeminjaman} from './src/screens/Peminjaman';
import {Dashboard} from './src/screens/Dashboard';
import {Linimasa} from './src/screens/Linimasa';

AppRegistry.registerComponent(appName, () => App);
