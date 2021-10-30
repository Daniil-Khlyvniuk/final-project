// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		// 'react/jsx-uses-react': ['error'],
		// 'react/jsx-uses-vars': ['error'],
		'no-duplicate-imports': [ 'error' ],
		'no-use-before-define': [ 'error' ],
		'func-style': ['error', 'expression'],
		'require-await': 'error',
		'max-len': ['error', {'code': 100, 'ignoreUrls': true}],
		'no-console': [
			'error',
		],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			// eslint-disable-next-line no-undef
			(process.platform === 'win32' ? 'windows' : 'unix')
		],
		'quotes': ['error', 'single'],
		'semi': [
			'error',
			'never'
		]
	}
}
