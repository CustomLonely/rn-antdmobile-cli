import React, { Component } from 'react';
import { Text, View } from 'react-native';

import IconMap from '../../../config/IconMap';

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  _getCode(name) {
    let getcode = name => String.fromCharCode(IconMap[name]);
    Object.assign(getcode, IconMap);
    if (name in getcode) {
      this.font = getcode(name);
    }
  }

  render() {
    const { name, style } = this.props;
    //读取字体图标
    this._getCode(name);
    console.log(this.font)
    return (
      <Text
        style={[
          { fontFamily: 'dkfont' },
          style,
          !this.font
            ? { backgroundColor: '#808080', width: 18, height: 18 }
            : null
        ]}
      >
        {this.font}
      </Text>
    );
  }
}
