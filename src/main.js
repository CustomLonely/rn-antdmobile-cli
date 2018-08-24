import React, { Component } from "react";
import { AsyncStorage } from "react-native";



import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";



// unit
import Config from "./config/Config";
import Http from "./service/Http";

//pages
import OrderIndex from './pages/order/OrderIndex';
import FoodIndex from './pages/food/FoodIndex';
import Login from './pages/other/Login';

import SearchIndex from './pages/search/SearchIndex';
import UserIndex from './pages/user/UserIndex';
import Pages from './pages/Pages';
import Register from './pages/other/Register';
import Cities from './pages/other/Cities'
//接口
import PRegister from './port/PRegister'
// 全局变量(统一管理)
global.App = {
  Config,
  PRegister,
};
global.api = Http;
// 底部菜单路由
const MainTabNavigator = TabNavigator(
  {
    Cities: {
      screen: Cities
    },
    FoodIndex: {
      screen: FoodIndex
    },
    SearchIndex: {
      screen: SearchIndex
    },
    OrderIndex: {
      screen: OrderIndex
    },
    UserIndex: {
      screen: UserIndex
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: "#808080",
      activeTintColor: "#597AEE",
      showIcon: true,
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

// 程序主路由
const MainScreenNavigator = StackNavigator(
  {
    MainTab: {
      screen: MainTabNavigator
    },
    ...Pages
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: true //手势控制页面切换
    }
  }
);

// 路由入口
const MyApp = StackNavigator({
  MainScreen: {
    screen: MainScreenNavigator
  },
  Login: {
    screen: Login
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    if (!AsyncStorage.getItem("userinfo")) {
      return <Login />
    } else {
      return <MyApp />
    }

  }
}


