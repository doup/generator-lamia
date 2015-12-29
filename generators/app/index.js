'use strict';

var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var yosay  = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        console.log(this.sourceRoot());

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the amazing ' + chalk.cyan('Lamia') + ' generator!'
        ));

        /*
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the amazing ' + chalk.red('generator-lamia') + ' generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
        */
    },

    writing: function () {
        this.directory('base', '');
        /*
        this.fs.copy(
            this.templatePath('base/**'),
            this.destinationPath('')
        );

        this.fs.copy(
            this.templatePath('dummyfile.txt'),
            this.destinationPath('dummyfile.txt')
        );*/
    },

    install: function () {
        this.installDependencies();
    }
});
