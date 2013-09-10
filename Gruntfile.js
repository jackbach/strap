module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    less: {
      compile: {
        files: {
          'public/styles.css': 'src/stylesheets/styles.less'
        }
      }
    },

    jade: {
      compile: {
        files: [{
            expand: true,
            cwd: 'src/jades',
            src: '*.jade',
            dest: 'public',
            ext: '.html'
        }]
      }
    },

    regarde: {
      less: {
        files: ['src/stylesheets/**/*.{less,css}'],
        tasks: ['less:compile']
      },
      jade: {
        files: ['src/jades/**/*.jade'],
        tasks: ['jade:compile']
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'public'
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'jade', 'connect', 'regarde']);
};
