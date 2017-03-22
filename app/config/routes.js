import React from 'react';
import {StackNavigator} from 'react-navigation';

import	StartPage from '../screens/startScreen';
import	Cam from '../screens/cam';
import	Maps from '../screens/exploreMap';
import	ReportMap	from	'../screens/dragMap';

export  const ScreenStack = StackNavigator({
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
					backgroundColor: '#32BE0A',

				}
			},
		}
	},
	ReportMap:	{
		screen:	ReportMap,
		navigationOptions:	{
			title:	'Report',
			header:	{
				visible:	false,
			}
		}
	}
});
