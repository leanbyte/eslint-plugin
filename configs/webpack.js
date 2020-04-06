'use strict';

module.exports = {
	root: true,
	extends: './configs/shared.js',
	env: {
        node: false,
        browser: true,
        commonjs: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			arrowFunctions: true,
			blockBindings: true,
			classes: true,
			defaultParams: true,
			destructuring: true,
			forOf: true,
			generators: false,
			modules: true,
			objectLiteralComputedProperties: true,
			objectLiteralDuplicateProperties: false,
			objectLiteralShorthandMethods: true,
			objectLiteralShorthandProperties: true,
			spread: true,
			superInFunctions: true,
			templateStrings: true,
			jsx: false
		},
	},
};
