import {StackNavigator} from 'react-navigation';

import	StartPage from '../screens/startScreen';
import	Cam from '../screens/cam';
import	Maps from '../screens/exploreMap';
import 	ReportMap	from	'../screens/reportMap';
import	LoginScreen	from	'../screens/loginScreen';

export  const ScreenStack = StackNavigator({
	LoginScreen:	{
		screen:	LoginScreen,
		navigationOptions:	{
			header:	{
				visible:	false,
			}
		}
	},

	StartScreen: {
		screen: StartPage,
		navigationOptions: {
			header: {
				visible: false,
			}
		},
	},

	CamScreen: {
		screen: Cam,
		navigationOptions: {
			animated: true,
			header: {
				visible: false,
			}
		},
	},

	MapScreen:  {
		screen: Maps,
		navigationOptions:  {
			title: 'Maps',
			animated: true,
			header: {
				style: {
					backgroundColor: '#27ae60',

				}
			},
		}
	},

	ReportMap:	{
		screen:	ReportMap,
		navigationOptions:	{
			title:	'Report	Issue',
			header:	{
				style:	{
					backgroundColor: '#27ae60',
				}
			}
		},

	}
});
