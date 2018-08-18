import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';

export default class LoginByUserName extends Component {
	static navigationOptions = { title: '密码登录', header: null };
	constructor(props) {
		super(props);

		this.state = { secure: true, bottomText: true };
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

				<View style={AppStyle.flex1}>
					<View style={[AppStyle.padding_h15, AppStyle.flex1]}>
						<View style={AppStyle.margin_v30}>
							<Text style={[AppStyle.font_s20, AppStyle.color_black1]}>手机号登录</Text>
						</View>
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
									secureTextEntry={this.state.secure}
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
						<ListItem
							style={{ height: 49, paddingLeft: 0, paddingRight: 0 }}
							disabled={true}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s17, AppStyle.color_black1, styles.info_item_title]}>
									密码
								</Text>
							}
							center={
								<TextInput
									style={[styles.info_item_content]}
									underlineColorAndroid="transparent"
									textAlignVertical="center"
									autoFocus={false}
									enablesReturnKeyAutomatically={true}
									secureTextEntry={this.state.secure}
									returnKeyType="done"
									placeholder={'密码至少6位含字母及数字'}
									placeholderTextColor={colorMap.gray[3]}
									keyboardType="numeric"
									defaultValue={''}
									onFocus={() => {
										this.setState({ bottomText: false });
									}}
									onBlur={() => {
										this.setState({ bottomText: true });
									}}
									onChangeText={text => {}}
									onSubmitEditing={e => {}}
									onEndEditing={e => {
										if (e.nativeEvent.text !== '') {
										}
									}}
								/>
							}
							right={
								<TouchableOpacity
									onPress={() => {
										this.setState({ secure: !this.state.secure });
									}}
								>
									<Icon
										name={this.state.secure ? 'eye' : 'uneye'}
										style={[AppStyle.font_s22, AppStyle.color_gray0]}
									/>
								</TouchableOpacity>
							}
						/>
						<TouchableOpacity
							style={AppStyle.padding_v23}
							onPress={() => {
								this.props.navigation.navigate('LoginBySms', {});
							}}
						>
							<Text style={[AppStyle.font_s14, AppStyle.color_blue1]}>用短信验证码登录</Text>
						</TouchableOpacity>
						<Button
							style={[AppStyle.bjColor_blue1, AppStyle.margin_h12, AppStyle.margin_v15]}
							onPress={() => {
								Alert.alert('', '账号或密码错误，请重新输入。', [{ text: '确定' }]);
							}}
							title={'登录'}
						/>
					</View>

					{this.state.bottomText
						? <View style={[AppStyle.row, AppStyle.center]}>
								<TouchableOpacity style={[styles.bottom_right]}>
									<Text style={[AppStyle.color_blue1]}>找回密码</Text>
								</TouchableOpacity>

								<TouchableOpacity style={[AppStyle.padding_l8]}>
									<Text style={[AppStyle.color_blue1]}> 注册</Text>
								</TouchableOpacity>
							</View>
						: null}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header_btn_width: {
		width: 80,
	},
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
	bottom_right: {
		paddingRight: 8,
		borderRightWidth: 1,
		borderColor: AppStyle.color_gray4,
	},
});
