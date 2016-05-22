module.exports = function(config){
  config.set({

    basePath : './',

    preprocessors: {
        "**/*.html": "ng-html2js" // Preprocessor
    },

    ngHtml2JsPreprocessor: {
        stripPrefix: 'app/',
        moduleName:'templates' //load this module in your tests
    },

    files : [
      'app/bower_components/angular/angular.js',
      // 'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      // 'app/components/**/*.js',
      // 'app/view*/**/*.js'
      'app/bower_components/jQuery/dist/jquery.min.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-resource/angular-resource.min.js',
      'app/js/**/*.js',
      'app/modules/**/*.js',
      'test/unit/**/*.js',
      'app/modules/**/*.html', // Here are your templates.
      'app/app.js',
      'index.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
