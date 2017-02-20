var keystone = require('keystone');

exports.getData = function(req, res) {
    var modelName = req.query.modelName;
    var num = req.query.num;
    var page = req.query.page;
    if (!modelName) {
        res.json({
            issucess: false,
            errorMsg: '非法的参数,需要传入modelName'
        });
        return;
    }

    if (page) {
        page = page ? page : 0;
        keystone.list(modelName).paginate({
            page: req.query.page || 1,
            perPage: 10,
            maxPages: 10
        }).exec(function(err, result) {
            res.json(result);
        });
        return;
    }

    if (num) {
        keystone.list(modelName).model.find().limit(~~num).exec(function(err, result) {
            err ? res.json(err) : res.json(result);
        });
        return;
    }

    keystone.list(modelName).model.find().exec(function(err, result) {
        res.json(result);
    });
};

exports.getDataById = function(req, res) {
    var modelName = req.query.modelName;
    var _id = req.query._id;
    keystone.list(modelName).model.findOne({ _id: _id }).exec(function(err, result) {
        res.json(result);
    });
};