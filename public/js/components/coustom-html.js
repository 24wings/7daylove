angular.module('myApp')
    .component('customHtml', {
        template: '<h1>hello world</h1>',
        controller: function() {
            this.customHtml = '<h1>hello world</h1>';
        }
    });