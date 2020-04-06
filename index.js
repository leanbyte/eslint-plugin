'use strict';

module.exports = {
    configs: {
        node: require('./configs/node'),
        babel: require('./configs/babel'),
        webpack: require('./configs/webpack'),
    },
    rules: {
        "leftover-only": require("./rules/leftover-only"),
    },
};
