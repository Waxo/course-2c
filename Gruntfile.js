module.exports = grunt => {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    exec: {
      test: {
        cmd: 'nyc yarn test --color'
      }
    },
    spawnProcess: {
      project: {
        args: ['index.js', '--color']
      }
    },
    watch: {
      project: {
        files: ['app/**/*.js', 'test/**/*.js', 'index.js'],
        tasks: ['xo', 'exec:test', 'spawnProcess:project'],
        options: {
          spawn: false
        }
      },
      prof: {
        files: ['app/**/*.js', 'test/**/*.js', 'index.js'],
        tasks: ['xo', 'exec:test', 'git', 'spawnProcess:project'],
        options: {
          spawn: false
        }
      }
    },
    xo: {
      target: ['index.js', 'app/**/*.js', 'test/**/*.js']
    },
    gitadd: {
      task: {
        files: {
          src: ['.']
        }
      }
    },
    gitcommit: {
      task: {
        options: {
          message: new Date().toString()
        }
      }
    },
    gitpush: {
      task: {
        options: {
          branch: 'master'
        }
      }
    }
  });

  grunt.registerTask('default', 'start');
  grunt.registerTask('git', ['gitadd', 'gitcommit', 'gitpush']);
  grunt.registerTask('prof',
    ['xo', 'exec:test', 'spawnProcess:project', 'watch:prof']);
  grunt.registerTask('no-test',
    ['xo', 'spawnProcess:project', 'watch:project']);
  grunt.registerTask(
    'start', ['xo', 'exec:test', 'spawnProcess:project', 'watch:project']);
};
