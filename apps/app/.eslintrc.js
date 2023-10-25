module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ["./tsconfig.json"],
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'react-native'],
    env: {
        'react-native/react-native': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-native/all'
    ],
    settings: {
        react: {
            version: 'detect',
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
    },
    ignorePatterns: [
        "**/*.js",
        "**/*.json",
        "**/*.d.ts",
    ]
};