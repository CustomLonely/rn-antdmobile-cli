import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

import { Header, Icon, ListItem, Button } from '../../components/Index';
import { AppStyle, colorMap, styleMap } from '../../styles/Index';

export default class Register extends Component {
	static navigationOptions = { title: '注册', header: null };

	constructor(props) {
		super(props);

		this.state = { secure: true, bottomText: true };
	}

	render() {
		return (
			<View style={AppStyle.container}>
				<Header
					leftStyle={styles.header_btn_width}
					rightStyle={styles.header_btn_width}
					headerLeft={
						<TouchableOpacity
							style={[AppStyle.row, AppStyle.header_btn, AppStyle.header_btn_left]}
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
							<Text style={AppStyle.header_btn_text}>注册</Text>
						</TouchableOpacity>
					}
				/>
				<ScrollView
					style={[AppStyle.margin_t10, AppStyle.padding_h4, AppStyle.padding_h12, AppStyle.bjColor_white0]}
				>
					<View style={AppStyle.margin_b17}>
						<ListItem
							disabled={true}
							showBorder={true}
							style={[{ height: 88, paddingLeft: 0, paddingRight: 0 }]}
							left={
								<View style={[AppStyle.padding_t56]}>
									<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
										姓名
									</Text>
								</View>
							}
							center={
								<TextInput
									style={[styles.info_item_content]}
									underlineColorAndroid="transparent"
									textAlignVertical="center"
									autoFocus={false}
									enablesReturnKeyAutomatically={true}
									returnKeyType="done"
									placeholder={'请填写您的真实姓名'}
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
							right={
								<Image
									source={require('../../assets/images/pic_avatar.png')}
									style={[styles.person_image]}
								/>
							}
						/>
						<ListItem
							disabled={true}
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
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
									placeholder={'请填写手机号'}
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
							disabled={true}
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
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
									selectTextOnFocus={true}
									placeholder={'请填写验证码'}
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
							right={
								<Button
									style={[AppStyle.padding_h10, AppStyle.bjColor_white0, { height: 34 }]}
									title={'获取验证码'}
									color={colorMap.blue[1]}
									borderColor={colorMap.blue[1]}
									fontSize={14}
								/>
							}
						/>
						<ListItem
							disabled={true}
							style={{ height: 50, paddingLeft: 0, paddingRight: 0 }}
							showBorder={true}
							left={
								<Text style={[AppStyle.font_s16, AppStyle.color_black1, styles.info_item_title]}>
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
					</View>
					<View style={[AppStyle.margin_t30, { justifyContent: 'center' }]}>
						<Button
							style={[AppStyle.bjColor_blue1]}
							onPress={() => {
								this.props.navigation.navigate('RegMaterial', {});
							}}
							title={'登录'}
						/>
					</View>
				</ScrollView>
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
		textAlign: 'left',
		fontSize: 15,
		padding: 0,

		color: colorMap.black[1],
	},
	bottom_info: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 20,
		flexDirection: 'row',
	},
	bottom_right: {
		paddingRight: 8,
		borderRightWidth: 1,
		borderColor: AppStyle.color_gray4,
	},
	person_image: {
		height: 67,
		width: 67,
		resizeMode: 'contain',
	},
	trangle_bottomright: {
		width: 13,
		height: 13,
		borderBottomWidth: 1,
		borderColor: '#AAAAAA',
		backgroundColor: '#AAAAAA',
		borderRightWidth: 1,
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
});
