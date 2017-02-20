/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var WeixinUser = new keystone.List('WeixinUser', {
    label: '微信用户',
    map: {
        name: 'username'
    }
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
WeixinUser.add({
    username: {
        label: '姓名',
        type: String,
        required: true,
        initial: true,
        index: true
    },
    phone: {
        label: '手机号',
        type: String
    },
    qq: {
        label: 'QQ',
        type: String
    },
    grader: {
        label: '年级',
        type: String
    },
    subject: {
        label: '专业',
        type: String
    }
});

WeixinUser.register();