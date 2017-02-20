angular.module('app', ['ngComponentRouter', 'app.services'])
    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl: 'app.module.html',
        $routeConfig: [{
                path: '/',
                name: 'IndexPage',
                component: 'indexPage',
                useAsDefault: true
            },

        ]
    });