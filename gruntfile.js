'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    karma: {
      all: {
        options: {
          frameworks: [ 'mocha', 'chai' ],
          browsers: [ 'Chrome' ],
          files: [
            'node_modules/angular/angular.js',
            'src/js/shopular.module.js',
            'src/js/**/*.js',
            'test/**/*.spec.js'
          ]

        }
      }
    }

  });

};
