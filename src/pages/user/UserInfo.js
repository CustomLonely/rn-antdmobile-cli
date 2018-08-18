import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity
} from 'react-native';

import { Header, Icon, ListItem } from '../../components/Index';
import { AppStyle, colorMap } from '../../styles/Index';

export default class UserInfo extends Component {
  static navigationOptions = {
    title: '个人信息',
    header: null
  };

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
              <Text style={AppStyle.header_btn_text}>我的</Text>
            </TouchableOpacity>
          }
          title={'个人信息'}
        />
        <ScrollView>
          <View
            style={[
              AppStyle.margin_t10,
              styles.borderTop,
              styles.borderBottom,
              AppStyle.bjColor_white0
            ]}
          >
            <ListItem
              style={[
                styles.info_item,
                styles.info_item_avatar,
                styles.borderBottom
              ]}
              left={
                <View>
                  <Text style={styles.info_item_title}>头像</Text>
                </View>
              }
              right={
                <View style={[AppStyle.row, AppStyle.center]}>
                  <View>
                    <Image
                      source={{
                        uri:
                          'https://b-ssl.duitang.com/uploads/item/201504/08/20150408H5032_VQvwR.thumb.700_0.jpeg'
                      }}
                      style={{ width: 64, height: 64, borderRadius: 5 }}
                    />
                  </View>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={<Text style={styles.info_item_title}>姓名</Text>}
              right={<Text style={[styles.info_item_content]}>医生姓名</Text>}
            />
            <ListItem
              style={styles.info_item}
              left={
                <View>
                  <Text style={styles.info_item_title}>我的二维码</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_desc, AppStyle.flex1]}
                  >
                    分享给患者建立医患关系
                  </Text>
                  <Icon
                    name={'qrcode'}
                    style={[
                      AppStyle.padding_l10,
                      AppStyle.font_s22,
                      AppStyle.color_gray0
                    ]}
                  />
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
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
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={AppStyle.row}>
                  <Text
                    style={[
                      AppStyle.font_s16,
                      AppStyle.color_red0,
                      AppStyle.margin_r6
                    ]}
                  >
                    *
                  </Text>
                  <Text style={styles.info_item_title}>性别</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    女
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('ProvinceList', {});
              }}
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={AppStyle.row}>
                  <Text
                    style={[
                      AppStyle.font_s16,
                      AppStyle.color_red0,
                      AppStyle.margin_r6
                    ]}
                  >
                    *
                  </Text>
                  <Text style={styles.info_item_title}>地区</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    上海
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />

            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={AppStyle.row}>
                  <Text
                    style={[
                      AppStyle.font_s16,
                      AppStyle.color_red0,
                      AppStyle.margin_r6
                    ]}
                  >
                    *
                  </Text>
                  <Text style={styles.info_item_title}>所在医院</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    上海第一人民医院
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />

            <ListItem
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={AppStyle.row}>
                  <Text
                    style={[
                      AppStyle.font_s16,
                      AppStyle.color_red0,
                      AppStyle.margin_r6
                    ]}
                  >
                    *
                  </Text>
                  <Text style={styles.info_item_title}>科室</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    泌尿外科
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />

            <ListItem
              style={styles.info_item}
              left={
                <View style={AppStyle.row}>
                  <Text
                    style={[
                      AppStyle.font_s16,
                      AppStyle.color_red0,
                      AppStyle.margin_r6
                    ]}
                  >
                    *
                  </Text>
                  <Text style={styles.info_item_title}>职称</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    教授
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
          </View>

          <View
            style={[
              AppStyle.margin_v20,
              AppStyle.bjColor_white0,
              styles.borderTop,
              styles.borderBottom
            ]}
          >
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('UserExpert', {});
              }}
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>擅长</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    前列腺炎，尿结石前列腺炎，尿结石
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('UserProfile', {});
              }}
              style={[styles.info_item, styles.borderBottom]}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>简介</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    中华医学会泌尿外科分会，中华医学会泌尿外科分会
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
              }
            />

            <ListItem
              style={styles.info_item}
              left={
                <View style={styles.info_item_left}>
                  <Text style={styles.info_item_title}>患者端banner照片</Text>
                </View>
              }
              center={
                <View
                  style={[AppStyle.row, AppStyle.center, AppStyle.margin_l4]}
                >
                  <Text
                    numberOfLines={1}
                    style={[styles.info_item_val, AppStyle.flex1]}
                  >
                    去上传
                  </Text>
                  <Icon
                    name={'arrowRight'}
                    style={[AppStyle.padding_l10, AppStyle.color_gray0]}
                  />
                </View>
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
    width: 70
  },
  borderTop: {
    borderTopWidth: 0.5,
    borderTopColor: colorMap.gray[13]
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colorMap.gray[13]
  },
  info_item_avatar: {
    height: 88
  },
  info_item: {
    height: 44,
    paddingLeft: 0,
    marginLeft: 12
  },
  info_item_title: {
    fontSize: 17,
    color: colorMap.black[0]
  },
  info_item_content: {
    textAlign: 'right',
    fontSize: 15,
    color: colorMap.gray[0]
  },
  info_item_desc: {
    textAlign: 'right',
    fontSize: 15,
    color: colorMap.gray[11]
  },
  info_item_val: {
    textAlign: 'right',
    fontSize: 16,
    color: colorMap.gray[0]
  },
  info_item_left: {
    width: 145
  }
});
