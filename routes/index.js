var keystone = require('keystone'),
  middleware = require('./middleware'),
  scanner = require('./scanner'),
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
  app.all('/:service/:action', function (req, res, next) {
    try {

      var route = require('./autoRoute/' + req.params.service);
      route.doAction(req.params.action)(req, res);
    } catch (e) {
      res.json({
        state: 0,
        issuccess: false,
        e: JSON.stringify(e)
      });
    }

  })
  // app.get('/data/getData', routes.views.data.getData);
  // app.get('/data/getDataById', routes.views.data.getDataById);




};
