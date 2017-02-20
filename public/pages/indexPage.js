angular.module('app')
    .component('indexPage', {
        templateUrl: 'pages/indexPage.html',
        controller: function (paramService) {
            console.log(paramService.getQueryString('id'));

        }
    })