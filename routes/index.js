var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname); //generate 

// common  middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


// 404 Error Handle
keystone.set('404', function (err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});


// load routes 
var routes = {
    views: importRoutes('./views')
};

exports = module.exports = function (app) {

    app.get('/data/getData', routes.views.data.getData);
    app.get('/data/getDataById', routes.views.data.getDataById);
    app.get('/views/weixin/article', routes.views.weixinArticle.allArticles);
    app.get('/views/weixin/addWeixinUser', routes.views.addWeixinUser.getPage)
    app.post('/views/weixin/addWeixinUser', routes.views.addWeixinUser.addWeixinUser);
};