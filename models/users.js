/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var User = new keystone.List('User', {
    label: '用户'
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
User.add({
    name: { label: '姓名', type: Types.Name, required: true, index: true },
    email: { label: '邮箱', type: Types.Email, required: true, initial: true, index: true },
    password: { label: '密码', type: Types.Password, initial: true },
    canAccessKeystone: { label: '是否可访问后台', type: Boolean, initial: true }
});

User.register();