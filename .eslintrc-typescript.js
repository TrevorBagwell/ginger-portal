module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'class-property'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'linebreak-style': ['error', 'unix'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 0,
		'react/display-name': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-no-target-blank': 0,
		'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
		'no-useless-escape': 0,
		'require-atomic-updates': 0,
		'no-async-promise-executor': 0
	}
}
