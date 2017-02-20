var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: '123@qq.com',
        password: '123',
        canAccessKeystone: true
    }).save(done);

};