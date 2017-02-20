var keystone = require('keystone');
var WeixinUser = keystone.list('WeixinUser');

exports.addWeixinUser = function (req, res) {
    var {
        username,
        phone,
        qq,
        grade,
        subject
    } = req.body;
    new WeixinUser.model({
        username,
        phone,
        qq,
        grade,
        subject
    }).save(function (err, result) {
        res.json({
            issuccess: !err,
            data: err ? err : result
        });
    })

};
exports.getPage = function (req, res) {
    res.render('addWeixinUser');
}