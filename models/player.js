/**
 * 玩家即用户
 * 
 */
var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Player = new keystone.List('Player', {
  label: '我的用户',
  map: {
    name: 'name'
  },
  defaultSort: '-createdAt'
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

  },
  password: {
    label: '密码',
    type: String
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
  },
  createdAt: {
    label: '创建时间',
    type: Date,
    default: Date.now
  },
  isFinishInfo: {
    label: '是否填写完整的个人信息',
    type: Types.Boolean,
    default: false
  }

});

Player.register();
