import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Header } from '../../components/Index';
import { Card, Icon } from 'antd-mobile-rn';
import { AppStyle, styleMap } from '../../styles/Index';

export default class Cities extends Component {

    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: '订单',
        header: null,
        headerBackTitle: null,

    };

    componentDidMount() {
        this.getData();
    }

    getData() {
        App.PRegister.cities({ type: "guess" }).then(res => {
            console.warn(res)
        },
            err => {
                console.warn(err);
            }
        )
    }

    render() {
        return (
            <View style={AppStyle.container}>
                <Header
                    leftStyle={styles.header_btn_width}
                    rightStyle={styles.header_btn_width}
                    headerLeft={
                        <TouchableOpacity style={styles.header_left}>
                            <View>
                                <Text style={styles.header_right_text}>ele.me</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    headerRight={
                        < View style={styles.header_right} >
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("Login")
                                }}
                                style={styles.header_btn_right}
                            >

                                <Text style={styles.header_right_text}>登录</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.header_btn_right}
                                onPress={() => {
                                    this.props.navigation.navigate("Register")
                                }}
                            >

                                <Text style={styles.header_right_text}>|注册</Text>
                            </TouchableOpacity>
                        </View>

                    }
                />
                <ScrollView>
                    <Card>
                        <Card.Header
                            title="当前定位城市:"
                            thumbStyle={{ width: 30, height: 30 }}
                            extra={
                                <View style={{ width: 220, marginRight: 10, }}>
                                    <Text style={{ fontSize: 12 }}>定位不准确时，请在城市列表中选择</Text>
                                </View>
                            }
                        />
                        <Card.Body>
                            <View style={{ height: 30, flexDirection: 'row', flex: 1, }}>
                                <View><Text style={{ marginLeft: 16 }}>Card Content</Text></View>
                                <View> <Icon type={'right'} size={18} color="#333" /></View>
                            </View>
                        </Card.Body>

                    </Card>
                </ScrollView>

            </View >
        )
    }

}
const styles = StyleSheet.create({
    header_btn_width: {
        width: 40,

    },
    header_left: {
        width: 80,
        paddingLeft: 10
    },
    header_right_text: {
        ...styleMap.color_white0
    },
    header_right: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        width: 70
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