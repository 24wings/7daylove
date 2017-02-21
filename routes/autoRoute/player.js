var keystone = require('keystone');

class Player {
    get service() {
        return "player"
    }
    doAction(action) {
        switch (action) {
            case "allPlayer":
                return this.allPlayer;
            case "getPlayerByPhone":
                return this.getPlayerByPhone;
            case "getPlayerInfo":
                return this.getPlayerInfo;
            default:
                return this.notFound;
        }
    }

    allPlayer(req, res) {
        keystone.list('Player').model.find().then(docs =>
            res.json({
                issuccess: true,
                data: docs
            }));
    }

    getPlayerByPhone(req, res) {


    }
    getPlayerInfo(req, res) {
        var {
            phone,
            password
        } = req.query;
        if (phone && password) {
            keystone.list('Player').findOne({
                phone: phone,
                password: password
            }).then(function (doc) {
                if (doc.length < 1) {
                    res.json({
                        state: 1,
                        issuccess: false,
                        errorMsg: '该用户不存在'
                    });
                } else {
                    res.json({
                        state: 1,
                        issuccess: true,
                        data: doc
                    });
                }
            });
        } else {
            res.json({
                state: 1,
                issuccess: false,
                errorMsg: '参数不合法'
            });
        }
    }
    notFound(req, res) {
        res.json({
            issuccess: false,
            errorMsg: '错误消息'
        });
    }
}
module.exports = new Player();