var keystone = require('keystone'),
    Types = keystone.Field.Types;

var RadioResult = new keystone.List('RadioResult', {
    label: '单选答案',
    map: {
        name: 'title'
    },
    defaultSort: '-creatAt'
});


RadioResult.add({
    title: {
        label: '单选答案',
        type: String,
        required: true
    },
    player: {
        label: '玩家',
        type: Types.Relationship,
        ref: 'Player'
    },
    //权重
    radio: {
        label: '单选的问题',
        type: Types.Relationship,
        ref: 'RadioQuestion'
    },
    chooseed: {
        label: '选中的答案',
        type: String,
        options: ['A', 'B', 'C', 'D']
    }

});

RadioResult.register();