var keystone = require('keystone');



// init app  ,such as static_file,view_engine,mongo
keystone.init({
    'name': '我的keystone模板',
    'brand': 'Demo',
    // 'favicon':'public/favicon.ico',
    'less': 'public',
    'static': 'public',
    'views': 'templates/views',
    'view engine': 'jade',
    'auto update': true,
    'mongo': 'mongodb://localhost/keystone-demo',
    'cloudinary config': 'cloudinary://688229757297621:D-7VrFqtn6ayg6ItFNXSm52jcS0@dnf1ydl7w',
    'embedly api key': 'adb1c865a9bc489dad997a5f5bddcd6a',
    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': 'my secret'
});


// load model
require('./models');
// load routes
keystone.set('routes', require('./routes'));

keystone.start();