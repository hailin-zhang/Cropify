module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true
    },
    'project': ['tsconfig.json']
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-indent': 0,
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'max-len': [2, 120, {
      ignoreComments: true,
      // Allow import statements to extend max-len
      ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
    }],
    '@typescript-eslint/explicit-function-return-type': [2],
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.test.tsx", "**/test-utils.tsx"]}],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    '@typescript-eslint/no-empty-interface': [2, { allowSingleExtends: true }],
  }
};