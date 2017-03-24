import React,	{Component}	from	'react';

import	{
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Image,
	Text,
	Dimensions,


}	from	'react-native';

export	default	class LoginForm	extends	Component	{
	constructor(props)	{
		super(props);

	}

	handleLoginPress  = ()  => {
		this.props.navigation.navigate("MapScreen");
}
	render()	{
		return(
			<View	style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder='Username or Email'
					placeholderTextColor='rgba(255,255,255,0.7)'
					underlineColorAndroid='transparent'
					returnKeyType='next'
					keyboardType='email-address'
					onSubmitEditing={()	=>	this.passwordInput.focus()}/>

				<TextInput
					style={styles.input}
					placeholder='Password'
					placeholderTextColor='rgba(255,255,255,0.7)'
					underlineColorAndroid='transparent'
					secureTextEntry={true}
					returnKeyType='go'
					ref={(input)	=>	this.passwordInput	=	input}/>
					<TouchableOpacity
							style={styles.buttonContainer}
							onPress={this.handleLoginPress}>
						<Text	style={styles.button}>LOGIN</Text>
					</TouchableOpacity>
			</View>
		);
	}
}

const	styles	=	StyleSheet.create({
	container:	{
		padding:	20
	},

	input:	{
		height:	40,
		backgroundColor:	'rgba(255,255,255,0.4)',
		marginBottom:	10,
		color:	'#fff',
		padding:	10,
	},

	buttonContainer:	{
		backgroundColor:	'#3498db',
		paddingVertical:	15,
	},

	button:	{
		textAlign:	'center',
		color:	'#fff',
		fontWeight:	'900'
	}
});
