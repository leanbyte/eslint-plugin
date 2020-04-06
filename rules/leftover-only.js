'use strict';

const disallowedNames = [
	'describe',
	'it',
];

module.exports = function(context) {
    return {
        'CallExpression': function(node) {
            var callee = node.callee;

            if (callee.type === 'MemberExpression' && callee.property.name === 'only' &&
            		disallowedNames.includes(callee.object.name)) {
                context.report(node.callee, 'Leftover .only() detected');
            }
        }
    };
};
