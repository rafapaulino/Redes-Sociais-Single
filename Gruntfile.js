/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/redes-sociais-single.min.css': [
						'css/redes-sociais-single.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/redes-sociais-bundle.min.js': [
                        'js/openEmailModal.js',
                        'js/redes-sociais-single.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};