angular.module('myApp.directives', [])
    .directive('MyHtml', function() {

        return {
            resrict: 'EA',
            link: function(scope, element, attrs) {
                console.log(attrs);

            }
        };
    });