import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Dimensions,
  Alert,
  Linking
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class UserSetting extends Component {
  static navigationOptions = { title: '设置', header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Header
          leftStyle={styles.header_btn_width}
          rightStyle={styles.header_btn_width}
          headerLeft={
            <TouchableOpacity
              style={[
                AppStyle.row,
                AppStyle.header_btn,
                AppStyle.header_btn_left
              ]}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name={'arrowLeft'} style={AppStyle.header_btn_icon} />
            </TouchableOpacity>
          }
          title={'设置'}
        />

        <ScrollView>
          <View
            style={[
              AppStyle.margin_t20,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('WalletCode', {});
              }}
              style={[styles.member_item1, styles.borderBottom]}
              center={<Text style={styles.member_item_title}>更换手机</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('PassLoginCode', {});
              }}
              style={[styles.member_item1, styles.borderBottom]}
              center={
                <Text style={styles.member_item_title}>修改登录密码</Text>
              }
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('PassPayEdit', {});
              }}
              style={[styles.member_item]}
              center={
                <Text style={styles.member_item_title}>修改安全密码</Text>
              }
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
          </View>

          <View
            style={[
              AppStyle.margin_t20,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              onPress={() => {}}
              style={[styles.member_item1, styles.borderBottom]}
              center={<Text style={styles.member_item_title}>推荐分享</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {}}
              style={[styles.member_item1, styles.borderBottom]}
              center={<Text style={styles.member_item_title}>用户协议</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {}}
              style={[styles.member_item1, styles.borderBottom]}
              center={<Text style={styles.member_item_title}>关于我们</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
            <ListItem
              onPress={() => {
                Alert.alert('提示信息', '您是否要拨打客服电话', [
                  {
                    text: '取消',
                    onPress: () => {}
                  },
                  {
                    text: '确定',
                    onPress: () => {
                      Linking.openURL(`tel:${App.Config.tel}`).catch(e => {});
                    }
                  }
                ]);
              }}
              style={[styles.member_item]}
              center={<Text style={styles.member_item_title}>联系客服</Text>}
              right={
                <Icon name={'arrowRight'} style={[AppStyle.color_gray0]} />
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_btn_width: {
    width: 60
  },
  borderTop: {
    borderTopWidth: 0.5,
    borderTopColor: colorMap.gray[13]
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colorMap.gray[13]
  },
  member_item: {
    height: 44
  },
  member_item1: {
    height: 44,
    paddingLeft: 0,
    marginLeft: 12
  },
  member_item_title: {
    fontSize: 17,
    color: colorMap.black[0]
  }
});
