module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      // Your project's source files
      src : 'public/js/*.js',
      // Your Jasmine spec files
      specs : 'spec/*spec.js'
    }
  });

  // // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // // Default task(s).
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', 'jasmine');

};