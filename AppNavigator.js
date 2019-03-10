/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator } from 'react-navigation';
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

const AppNavigator = createStackNavigator({
    SignUp: { screen: SignUp },
    Loading: { screen: Loading },
    Login: { screen: Login },
    Main: { screen: Main }
}, { headerMode: 'none' }, {
    initialRouteName: 'Loading'
  });


export default AppNavigator;
