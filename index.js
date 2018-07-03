module.exports = {
    extends: [
        './rules/errors.js',
        './rules/language.js',
        './rules/style.js',
        './rules/no-ignored-properties.js',
        './rules/scss.js',
    ].map(require.resolve),
};
