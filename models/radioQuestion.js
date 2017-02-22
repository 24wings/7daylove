var keystone = require('keystone'),
  Types = keystone.Field.Types;

var RadioQuestion = new keystone.List('RadioQuestion', {
  label: '单选问题',
  map: {
    name: 'title'
  },
  defaultSort: '-creatAt'
});


RadioQuestion.add({
  title: {
    label: '问题,例如喜欢什么样的食物',
    type: String,
    required: true
  },

  //权重
  weights: {
    label: '权重:',
    type: Types.Number,
  },
  choose: {
    label: "选择问题,使用','分隔答案,例如:  蛋糕,咖啡,奶茶,鸡蛋",
    type: String
  },
  sortNum: {
    label: '排序:数字越小越优先',
    type: Types.Number,
    default: 100
  },
  // 正确答案
  correctAnswer: {
    label: '正确答案',
    type: Types.Select,
    options: ['A', 'B', 'C', 'D']
  },
  creatAt: {
    label: '创建时间',
    type: Types.Date,
    default: Date.now
  }
});

RadioQuestion.register();
