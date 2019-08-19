const
    crew = require('serenity-js/lib/stage_crew');
protractor = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),

    exports.config = {

        seleniumAddress: "http://localhost:4444/wd/hub",

        allScriptsTimeout: 110000,

        disableChecks: true,

        ignoreUncaughtExceptions: true,
        framework: 'custom',
        frameworkPath: require.resolve('serenity-js'),

        serenity: {
            crew: [
                crew.serenityBDDReporter(),
                crew.Photographer.who(_ => _
                    .takesPhotosOf(_.Failures)
                )
            ]
        },

        specs: ['features/**/*.feature'],
        cucumberOpts: {
            require: ['features/**/*.ts'],
            format: 'pretty',
            compiler: 'ts:ts-node/register'
        },

        capabilities: {
            browserName: 'chrome',
            chromeOptions: {
                prefs: {
                    "profile.default_content_setting_values.geolocation": 2,
                },
                args: [
                    '--disable-infobars',
                    '--start-maximized',
                    '--headless',
                ]
            }
        }
    };
