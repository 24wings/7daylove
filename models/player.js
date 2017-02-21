/**
 * 玩家即用户
 * 
 */
var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Player = new keystone.List('Player', {
  label: '我的用户'
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
Player.add({
  name: {
    label: '姓名',
    type: String,
    required: true,
    index: true
  },
  phone: {
    label: '手机号',
    type: String,
    required: true
  },
  password: {
    label: '密码',
    type: String,
    required: true
  },
  age: {
    label: '年龄',
    type: Types.Number
  },
  gender: {
    label: '性别',
    type: Types.Select,
    options: '男, 女',
    default: '男'

  },
  city: {
    label: '所在城市',
    type: String,
  },
  school: {
    label: '学校',
    type: String
  },
  height: {
    label: '身高',
    type: String,
  },
  weixinAccount: {
    label: '微信账号',
    type: String
  },
  qq: {
    label: 'QQ',
    type: Types.Number
  }

  // 其他的问题以及详细信息
});

Player.register();
