/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Wrapper';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
