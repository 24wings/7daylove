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
      case "addPlayer":
        return this.addPlayer;
      default:
        return this.notFound;
    }
  }
  addPlayer(req, res) {
    var {
      phone,
      password,
      name
    } = req.body;
    if (phone && password) {
      var newUser = new keystone.list('Player').model({
        name: name,
        phone: phone,
        password: password
      });
      newUser.save(err => {
        if (err) {
          res.json({
            state: 1,
            issuccess: true,
            errorMsg: err
          })
        } else {
          res.json({
            statr: 1,
            issuccess: true,
            data: []
          });
        }
      });
    } else {
      res.json({
        state: 1,
        issucess: false,
        errorMsg: '参数不合法'
      });
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
      keystone.list('Player').model.findOne({
        phone: phone,
        password: password
      }).exec(function (err, doc) {
        if (doc.length < 1) {
          res.json({
            state: 1,
            issuccess: false,
            errorMsg: '用户名或密码错误'
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
