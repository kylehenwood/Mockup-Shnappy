module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'scss/public.css' : 'scss/public.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
    autoprefixer:{
      dist:{
        files:{
          'scss/public.css' : 'scss/public.css'
        }
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
  grunt.registerTask('dev',['sass','autoprefixer']);
}
