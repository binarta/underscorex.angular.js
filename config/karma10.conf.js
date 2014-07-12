module.exports = function(config) {
    config.set({
        basePath:'../',
        frameworks:['jasmine'],
        files:[
            {pattern:'bower_components/underscore/underscore.js'},
            {pattern:'bower_components/angular/angular.js'},
            {pattern:'bower_components/angular-mocks/angular-mocks.js'},
            {pattern:'src/underscorex.angular.js'},
            {pattern:'test/underscorex.angular.spec.js'}
        ],
        browsers:['PhantomJS']
    });
};