angular.module('tiyaraApp')
    .directive('backImg', function () {
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')'
        });
    };
});