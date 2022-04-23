const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            Src: path.resolve(__dirname, 'src'),
            Redux: path.resolve(__dirname, 'src/redux'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Components: path.resolve(__dirname, 'src/app/components'),
            Containers: path.resolve(__dirname, 'src/app/containers'),
            Styles: path.resolve(__dirname, 'src/scss'),
            CustomHOC: path.resolve(__dirname, 'src/customHOC'),
            Utility: path.resolve(__dirname, 'src/utility'),
        },
    };

    return config;
};
