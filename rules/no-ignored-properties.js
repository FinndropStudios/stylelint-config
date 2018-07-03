module.exports = {
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
    ],
    rules: {
        // Disallow property values that are ignored due to another property value in the same rule.
        'plugin/declaration-block-no-ignored-properties': true,
    },
};
