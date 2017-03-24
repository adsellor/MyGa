import	React,	{Component}	from	'react';

import	{
	View,
	TouchableOpacity,
	StyleSheet,
}	from	'react-native';

export	default	class ReportBox	extends	Component {
	constructor(props) {
		super(props);

	}
	render()	{
		return	(
		<View	style={styles.box}	>
			<TouchableOpacity
				style={styles.form}	/>
			</View>
		);
	}
}

const	styles	=	StyleSheet.create({
	box:	{
		alignItems:	'center',
		justifyContent:	'center'
	},

	form:	{
		width:	100,
		height:	100,
		borderRadius:	80,
		backgroundColor:	'black'
	}
})
