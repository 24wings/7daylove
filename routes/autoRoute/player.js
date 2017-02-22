var keystone = require('keystone');
var Player = keystone.list('Player');
var RadioQuestion = keystone.list('RadioQuestion');
var AnwserQuestion = keystone.list('AnwserQuestion');
class PlayerRoute {
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
      case "isFinishInfo":
        return this.isFinishInfo;
      case "allRadioQuestions":
        return this.allRadioQuestions;
      case "allAnwserQuestions":
        return this.allAnwserQuestions;
      default:
        return this.notFound;
    }
  }
  allAnwserQuestions(req, res) {
    AnwserQuestion.model.find().exec((err, docs) => {
      err ? res.json({
        issuccess: false,
        errorMsg: err
      }) : res.json({
        issuccess: true,
        data: docs
      });
    });
  }

  allRadioQuestions(req, res) {
    RadioQuestion.model.find().exec((err, docs) => {
      err ? res.json({
        issuccess: false,
        errorMsg: err
      }) : res.json({
        issuccess: true,
        data: docs
      });
    });

  }

  isFinishInfo(req, res) {
    var phone = req.query.phone;
    Player.model.findOne({
        phone: phone
      })
      .exec(function (err, doc) {
        err ? res.json({
          issucess: false,
          errorMsg: err
        }) : res.json({
          issucess: true,
          data: {
            isFinishInfo: doc.isFinishInfo
          }
        });
      });

  }

  addPlayer(req, res) {
    var {
      phone,
      password,
      name
    } = req.body;
    if (phone && password) {
      var newPlayer = new Player.model({
        name: name,
        password: password,
        phone: phone
      });

      newPlayer.save(err => {
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
      keystone.list('Player').model.find({
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
            data: doc[0]
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
      state: 1,
      issuccess: false,
      errorMsg: '404不存在的接口'
    });
  }
}
module.exports = new PlayerRoute();
