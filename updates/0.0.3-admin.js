var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: '111@qq.com',
        password: '111',
        canAccessKeystone: true
    }).save(done);

};