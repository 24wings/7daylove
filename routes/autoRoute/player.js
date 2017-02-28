var keystone = require('keystone');
var Player = keystone.list('Player');
var RadioQuestion = keystone.list('RadioQuestion');
var AnwserQuestion = keystone.list('AnwserQuestion');
var AnwserResult =  keystone.list('AnwserResult');
var User  =  keystone.list('Player');
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
        case "submitQuestions":
        return this.submitQuestions;
      default:
        return this.notFound;
    }
  }

  submitQuestions(req,res){
    var {radios,anwsers,phone}=req.body;
    console.log(req.body);
    console.log(Array.isArray(radios),Array.isArray(anwsers));
    if(Array.isArray(radios)&&Array.isArray(anwsers)&&phone){
      /**
       * 将每一个问题都进行分析整理,入库
       */

      Player.model.find({phone:phone}).limit(1).exec().then(docs=>{
        var player =docs[0];
        if(player){
                 anwsers.forEach((anwser)=>{
          console.log('anwser-id:',anwser._id,'player-id:',player._id);

              AnwserQuestion.model.findById(anwser._id).exec().then(doc=>{
                if(doc){
                  var anwserQustion= doc;
                  AnwserResult.model({
                    fromUserId:player._id,
                    fromUser:player._id,
                    fromUsername:player.name,
                    fromUserphone:player.phone,
                    anwser:anwser.anwser,
                    title:doc.title,
                    maxHeights:doc.maxHeights,
                     maxLetter:doc.maxLetter}).save(doc=>{
                    console.log(doc);
                  });
                }else{
                  /**
                   * 后期修复bug
                   */
                  console.log('err');
                  throw new Error('问题没找到')
                }
              });
        });
        }else{
          res.json({
            issucess:false,
            errorMsg:'该用户不存在'
          });
        }
      });

    }else{
      res.json({
        issucess:false,
        errorMsg:'参数不合法,请传递正确的单选题,问答题数组'
      })
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
        (err||!doc) ? res.json({
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
