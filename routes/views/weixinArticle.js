var keystone = require('keystone');
var WeixinArticle = keystone.list('WeixinArticle');

exports.allArticles = function (req, res) {
    WeixinArticle.model.find().then(function (docs) {
        res.render('weixinArticle', {
            articles: docs
        });
    });

};