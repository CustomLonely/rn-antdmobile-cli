import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	PixelRatio,
	TouchableOpacity,
	TextInput,
	Linking,
	Alert,
} from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';
var timer = null;

export default class LoginBySms extends Component {
	static navigationOptions = { title: '验证码登录', header: null };
	constructor(props) {
		super(props);

		this.state = { bottomText: true, isPress: false, timeCount: this.props.timeCount || 5 };
	}

	_changeText = () => {
		clearTimeout(timer);
		timer = setInterval(() => {
			if (this.state.timeCount == 0) {
				this.setState({ isPress: false });
				console.warn(123);

				clearTimeout(timer);
			}
			this.setState({ isPress: true });
			this.state.timeCount--;
		}, 500);
	};
	componentWillUnmount() {
		console.warn(132);
		timer && clearTimeout(timer);
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
							style={[AppStyle.padding_h12, AppStyle.padding_v10, { alignItems: 'center' }]}
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
									手机号码
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
						<ListItem
							style={{ height: 49, paddingLeft: 0, paddingRight: 0 }}
							disabled={true}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s17, AppStyle.color_black1, styles.info_item_title]}>
									验证码
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
									placeholder={'请填写验证码'}
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
								<Button
									style={[
										AppStyle.bjColor_white0,
										{
											borderColor: AppStyle.color_gray3,
											height: 35,
											paddingLeft: 16,
											paddingRight: 16,
										},
									]}
									disabled={this.state.isPress ? true : false}
									title={this.state.isPress ? `${this.state.timeCount}秒后重新获取` : '获取验证码'}
									color={this.state.isPress ? '#808080' : '#333333'}
									onPress={() => {
										this._changeText();
									}}
									borderColor={colorMap.blue[1]}
									fontSize={16}
								/>
							}
						/>
						<TouchableOpacity
							style={AppStyle.padding_v23}
							onPress={() => {
								this.props.navigation.navigate('LoginByUserName', {});
							}}
						>
							<Text style={[AppStyle.font_s14, AppStyle.color_blue1]}>用密码登录</Text>
						</TouchableOpacity>
						<Button
							style={[AppStyle.bjColor_blue1, AppStyle.margin_v15]}
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
	bottom_info: {
		flex: 1,
		flexDirection: 'column',
	},
	bottom_right: {
		paddingRight: 8,
		borderRightWidth: 1,
		borderColor: AppStyle.color_gray4,
	},
});
