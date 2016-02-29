/**
 * Gruntfile.js 
 * @author  TrimecheMH
 * @Copyright Proxym-it 
 * Created at 2/28/2016
 * Last update at "change me"
 * Module Grunt
 * write your description here !!!
 */

module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            options: {
                port: 3000,
                hostname: 'localhost'
            },
            runtime: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'instrumented'),
                            mountFolder(connect, '.......')
                        ];
                    }
                }
            }
        },
        instrument: {
            files: 'src/**/*.js',
            options: {
                lazy: true,
                basePath: "instrumented"
            }
        },
        protractor_coverage: {
            options: {
                keepAlive: true,
                noColor: false,
                coverageDir: 'path/to/coverage/dir',
                args: {
                    baseUrl: 'http://localhost:3000'
                }
            },
            local: {
                options: {
                    configFile: 'path/to/protractor-local.conf.js'
                }
            },
            travis: {
                options: {
                    configFile: 'path/to/protractor-travis.conf.js'
                }
            }
        },
        makeReport: {
            src: 'path/to/coverage/dir/*.json',
            options: {
                type: 'lcov',
                dir: 'path/to/coverage/dir',
                print: 'detail'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-protractor-coverage');

    grunt.registerTask('default', ['jshint']);

};