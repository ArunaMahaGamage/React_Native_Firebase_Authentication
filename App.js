/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createAppContainer } from "react-navigation";
import Loading from './Loading';


const AppNavigator = createStackNavigator({
    Loading: { screen: Loading }
}, { headerMode: 'none' });

export default createAppContainer(AppNavigator);
