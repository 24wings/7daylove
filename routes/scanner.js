var fs = require('fs');
//扫描项目app/routes/下面的所有路由文件
var routesDir = __dirname + '/autoRoute';

/**文件路由层**/
module.exports = function (app) {

    function loadFile(filePath) {
        var route = require(filePath);
        var routeObj = new route();

        if (routeObj) {
            debugger;
            //导出对象的platform对象,service服务,action请求
            console.log(`loading route parttern:  ${routeObj.service}/:action`);
            app.get('/' + routeObj.service, function (req, res, next) {
                console.log(req.params);

                routeObj.doAction(req.params.action).bind(routeObj, req, res)();
            });

        } else {
            var errorFile = `file: ${filePath}  not export right route Object`;
            throw new Error(errorFile);
        }

    }


    fs.readdir(routesDir, function (err, files) {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(function (path) {
            //routes目录下的文件路径
            var filePath = routesDir + "/" + path;
            fs.stat(filePath, function (err, stats) {
                if (err) {
                    return;
                }
                if (stats.isDirectory()) {
                    //递归执行函数
                } else {
                    //加载文件并解析
                    console.log('loading route js file:' + filePath);
                    loadFile(filePath);
                }
            })
        });
    });
    return app;
};