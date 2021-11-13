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
			'jsx': true,
			'js': true
		},
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'parser': 'babel-eslint',
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		// 'react/jsx-uses-react': ['error'],
		// 'react/jsx-uses-vars': ['error'],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'no-duplicate-imports': ['error'],
		'no-use-before-define': ['error'],
		'func-style': ['error', 'expression'],
		'require-await': 'error',
		'max-len': [
			'error',
			{
				'code': 80,
				'tabWidth': 2,
				'ignoreUrls': true,
				'ignoreComments': true,
				'ignoreStrings': true,
				'ignoreTrailingComments': true,
				'ignoreRegExpLiterals': true,
				'ignorePattern': '^import .*'
			}
		],
		// 'no-console': 'off',
		'no-console': [
			'warn',
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
