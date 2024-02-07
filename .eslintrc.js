module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: 'eslint:recommended',
    globals: {
        getNode: true,
        getNodes: true,
        gerAttr: true,
        serAttr: true,
        attr: true,
        insertLast: true,
        getCss: true,
        setCss: true,
        addClass: true,
        removeClass: true,
        toggleClass: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-unused-vars': 'off',
    },
};
