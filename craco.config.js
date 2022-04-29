const CracoLessPlugin = require('craco-less');
const cracoAlias = require("craco-alias");

module.exports = {
    mode: 'development',
    devServer: {
        port: 8001,
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#5F76FF' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: cracoAlias,
            options: {
                baseUrl: "./src",
                source: "jsconfig",
            }
        },
    ],
};
