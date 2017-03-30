'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    karma: {
      all: {
        options: {
          frameworks: [ 'mocha', 'chai' ],
          browsers: [ 'Chrome' ],
          files: [
            'src/js/shopular.module.js',
            'src/js/**/*.js'
          ]

        }
      }
    }

  });

};
