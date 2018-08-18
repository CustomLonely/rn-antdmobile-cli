import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
  
  import { Header, Icon, ListItem, SearchBar } from '../../components/Index';
  import { styleMap, AppStyle } from '../../styles/Index';

export default class FoodIndex extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: '外卖',
        header: null,
        headerBackTitle: null,
        headerTitleStyle: { alignSelf: 'center' },
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon
              name={focused ? 'foodActive' : 'food'}
              style={{ fontSize: 26, color: tintColor }}
            />
          );
        }
      };
    render(){
        return(
            <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
          title={'外卖'}
          headerRight={
            <TouchableOpacity
             
              style={AppStyle.header_btn_right}
            >
              <Icon name={'addhz'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
        />

      </View>
        )
    }
}

const styles = StyleSheet.create({
    header_btn_width: {
      width: 40
    },
    nav_left: {
      width: 36,
      height: 36,
      ...styleMap.bjColor_blue2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    nav_left_icon: {
      fontSize: 20,
      ...styleMap.color_white0
    },
    nav_right: {},
    nav_right_text: {
      fontSize: 16,
      ...styleMap.color_black1
    },
    list_title: {
      height: 22,
      paddingLeft: 12,
      justifyContent: 'center',
      ...styleMap.bjColor_gray4
    },
    list_title_text: {
      fontSize: 14,
      ...styleMap.color_gray0
    },
    list_left_image: {
      width: 36,
      height: 36
    },
    list_right_title: {
      fontSize: 17,
      ...styleMap.color_black1,
      marginBottom: 5
    },
    list_right_desc: {
      fontSize: 14,
      ...styleMap.color_gray1
    }
  });