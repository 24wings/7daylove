var keystone = require('keystone'),
    Types = keystone.Field.Types;

var AnwserResult = new keystone.List('AnwserResult', {
    label: '问答题结果',
    map: {
        name: 'title'
    },
    defaultSort: '-creatAt'
});


AnwserResult.add({
    title: {
        type: String,
        label: '问题'
    },

    player: {
        label: '玩家',
        type: Types.Relationship,
        ref: 'Player'
    },

    anwser: {
        label: '用户的回答:',
        type: String
    },
    maxHeights: {
        label: '最大权重',
        type: Types.Number,
    },
    maxLetter: {
        label: '满权重的文字长度,不满字符按百分比权重',
        type: Types.Number
    },
    creatAt: {
        label: '创建时间',
        type: Types.Date,
        default: Date.now
    }

});

AnwserResult.register();