// 登录注册
import LoginByUserName from './other/LoginByUserName'; // 密码登录
import Login from './other/Login'; // 输入手机号
import LoginBySms from './other/LoginBySms'; // 验证码登录
import Register from './other/Register'; // 注册
import Cities from './other/Cities';//城市列表
//搜索
import SearchIndex from './search/SearchIndex';//搜索

//订单
import OrderIndex from './order/OrderIndex';

//外卖
import FoodIndex from './food/FoodIndex';

// 我的
import UserIndex from './user/UserIndex'; // 个人信息

import UserSetting from './user/UserSetting'; // 设置


// 页面路由
const Pages = {
	SearchIndex: {
		screen: SearchIndex,
	},
	OrderIndex: {
		screen: OrderIndex,
	},
	FoodIndex: {
		screen: FoodIndex,
	},
	UserIndex: {
		screen: UserIndex,
	},

	UserSetting: {
		screen: UserSetting,
	},
	LoginByUserName: {
		screen: LoginByUserName,
	},
	Login: {
		screen: Login,
	},
	LoginBySms: {
		screen: LoginBySms,
	},
	Register: {
		screen: Register
	},
	Cities: {
		screen: Cities
	}

};

module.exports = Pages;