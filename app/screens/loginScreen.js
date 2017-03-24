import React,	{Component}	from	'react';

import	{
	View,
	StyleSheet,
	Text,
	Image,
}	from	'react-native';

import	LoginForm	from	'./loginForm'
export	default	class LoginScreen	extends	Component {
	render()	{
		return(
			<View	style={styles.container}>
				<View	style={styles.logoContainer}>
					<Image
						source={require('../assets/icon.png')}
						style={styles.icon}/>
						<Text	style={styles.text}> Help to Create Better Armenia	</Text>
				</View>
				<View	style={styles.loginForm}>
					<LoginForm/>
				</View>
			</View>
		);
	}
}

const	styles	=	StyleSheet.create({
	container:	{
		flex:	1,
		backgroundColor: '#1abc9c'
	},

	logoContainer:	{
		alignItems:	'center',
		justifyContent:	'center',
		flexGrow:	1,
	},

	icon:	{
		width:	280,
		height:	80,
	},

	text:	{
		color:	'#fff',
		textAlign:	'center',
		fontSize:	17
	}
});
