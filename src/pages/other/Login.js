import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	PixelRatio,
	TouchableOpacity,
	TextInput,
	Linking,
	Alert,
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';

export default class Login extends Component {
	static navigationOptions = { title: '输入手机号码', header: null };
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={[AppStyle.container, AppStyle.bjColor_white0]}>
				<Header
					headerStyle={AppStyle.bjColor_trans0}
					statusBarStyle={AppStyle.bjColor_trans0}
					barStyle={'dark-content'}
					headerLeft={
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.goBack();
							}}
							style={[AppStyle.row, AppStyle.padding_h12, AppStyle.padding_v10, { alignItems: 'center' }]}
						>
							<Icon name={'close'} style={[AppStyle.font_s20, AppStyle.padding_r10]} />
						</TouchableOpacity>
					}
					title={''}
				/>
				<View style={[AppStyle.flex1]}>
					<View style={[AppStyle.flex1, , AppStyle.padding_h15]}>
						<View style={AppStyle.margin_v30}>
							<Text style={[AppStyle.font_s20, AppStyle.color_black1]}>手机号登录</Text>
						</View>
						<View style={[{ height: 36 }, AppStyle.row]} />
						<View style={[AppStyle.margin_10, AppStyle.bjColor_white0]}>
							<ListItem
								disabled={true}
								showBorder={true}
								style={{ height: 49, paddingLeft: 0, paddingRight: 0 }}
								left={
									<Text style={[AppStyle.font_s17, AppStyle.color_black1, styles.info_item_title]}>
										手机号
									</Text>
								}
								center={
									<TextInput
										style={[styles.info_item_content]}
										underlineColorAndroid="transparent"
										textAlignVertical="center"
										autoFocus={false}
										enablesReturnKeyAutomatically={true}
										returnKeyType="done"
										placeholder={'请输入手机号码'}
										placeholderTextColor={colorMap.gray[3]}
										keyboardType="numeric"
										defaultValue={''}
										onChangeText={text => {}}
										onSubmitEditing={e => {}}
										onEndEditing={e => {
											if (e.nativeEvent.text !== '') {
											}
										}}
									/>
								}
							/>
						</View>
						<View style={[AppStyle.margin_v25]}>
							<Button
								style={[AppStyle.bjColor_blue1]}
								onPress={() => {
									this.props.navigation.navigate('LoginBySms');
								}}
								title={'下一步'}
							/>
						</View>
					</View>

					<View style={[AppStyle.row, { justifyContent: 'center' }]}>
						<TouchableOpacity style={[styles.bottom_right]}>
							<Text style={[AppStyle.color_blue1]}>找回密码</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[AppStyle.padding_l8]}>
							<Text style={[AppStyle.color_blue1]}> 注册</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	info_item_title: {
		fontSize: 16,
		textAlign: 'left',
		width: 70,
		color: colorMap.black[1],
	},
	info_item_content: {
		fontSize: 15,
		padding: 0,
		marginRight: 20,
		color: colorMap.black[1],
	},
	bottom_info: {
		position: 'relative',

		bottom: 20,
		flexDirection: 'column',
	},
	bottom_right: {
		paddingRight: 8,
		borderRightWidth: 1,
		borderColor: AppStyle.color_gray4,
	},
});
