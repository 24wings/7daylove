var keystone = require('keystone'),
  Types = keystone.Field.Types;
var AnwserQuestion = new keystone.List('AnwserQuestion', {
  label: '问答题',
  map: {
    name: 'title'
  },
  defaultSort: 'sortNum'
});


AnwserQuestion.add({
  title: {
    label: '问题:例如:描述一下自己的性格',
    type: String,
    required: true,
    initial: true
  },
  maxHeights: {
    label: '最大权重',
    type: Types.Number,
  },
  maxLetter: {
    label: '满权重的文字长度,不满字符按百分比权重',
    type: Types.Number
  },

  sortNum: {
    label: '排序:数字越小越优先',
    type: Types.Number,
    default: 100
  },
  creatAt: {
    label: '创建时间',
    type: Types.Date,
    default: Date.now
  }
});

AnwserQuestion.register();
