/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createAppContainer, SwitchNavigator } from "react-navigation";
import Loading from './Loading';
import AppNavigator from './AppNavigator';


export default createAppContainer(AppNavigator);
