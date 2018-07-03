module.exports = {
    rules: {
        // COLOR ==========================================
        // Require (where possible) or disallow named colors.
        'color-named': 'never',

        // Disallow hex colors.
        'color-no-hex': null,

        // FUNCTION =======================================
        // Specify a blacklist of disallowed functions.
        // 'function-blacklist': [],

        // Disallow scheme-relative urls.
        'function-url-no-scheme-relative': true,

        // Specify a blacklist of disallowed url schemes.
        // 'function-url-scheme-blacklist': ['ftp', '/^http:/'],

        // Specify a whitelist of allowed url schemes.
        // 'function-url-scheme-whitelist': ['data', '/^http/'],

        // Specify a whitelist of allowed functions.
        // 'function-whitelist': [],

        // NUMBER =========================================
        // Limit the number of decimal places allowed in numbers.
        'number-max-precision': 8,

        // TIME ===========================================
        // Specify the minimum number of milliseconds for time values.
        'time-min-milliseconds': 100,

        // UNIT ===========================================
        // Specify a blacklist of disallowed units.
        // 'unit-blacklist': [],

        // Specify a whitelist of allowed units.
        // 'unit-whitelist': [],

        // SHORTHAND PROPERTY =============================
        // Disallow redundant values in shorthand properties (Autofixable).
        'shorthand-property-no-redundant-values': true,

        // VALUE ==========================================
        // Disallow vendor prefixes for values.
        'value-no-vendor-prefix': null,

        // CUSTOM PROPERTY ================================
        // Specify a pattern for custom properties.
        // 'custom-property-pattern': '',

        // PROPERTY =======================================
        // Specify a blacklist of disallowed properties.
        // 'property-blacklist': [],

        // Disallow vendor prefixes for properties.
        'property-no-vendor-prefix': null,

        // Specify a whitelist of allowed properties.
        // 'property-whitelist': [],

        // DECLARATION ====================================
        // Disallow longhand properties that can be combined into one shorthand property.
        'declaration-block-no-redundant-longhand-properties': true,

        // Disallow !important within declarations.
        'declaration-no-important': true,

        // Specify a blacklist of disallowed property and unit pairs within declarations.
        // 'declaration-property-unit-blacklist': [],

        // Specify a whitelist of allowed property and unit pairs within declarations.
        // 'declaration-property-unit-whitelist': [],

        // Specify a blacklist of disallowed property and value pairs within declarations.
        // 'declaration-property-value-blacklist': [],

        // Specify a whitelist of allowed property and value pairs within declarations.
        // 'declaration-property-value-whitelist': [],

        // DECLARATION BLOCK ==============================
        // Limit the number of declaration within single line declaration blocks.
        'declaration-block-single-line-max-declarations': 1,

        // SELECTOR =======================================
        // Specify a blacklist of disallowed attribute operators.
        // 'selector-attribute-operator-blacklist': [],

        // Specify a whitelist of allowed attribute operators.
        // 'selector-attribute-operator-whitelist': [],

        // Specify a pattern for class selectors.
        // 'selector-class-pattern': '',

        // Specify a blacklist of disallowed combinators.
        // 'selector-combinator-blacklist': [],

        // Specify a whitelist of allowed combinators.
        // 'selector-combinator-whitelist': [],

        // Specify a pattern for id selectors.
        // 'selector-id-pattern': '',

        // Limit the number of attribute selectors in a selector.
        'selector-max-attribute': 2,

        // Limit the number of classes in a selector.
        'selector-max-class': 2,

        // Limit the number of combinators in a selector.
        'selector-max-combinators': 2,

        // Limit the number of compound selectors in a selector.
        'selector-max-compound-selectors': 3,

        // Limit the number of adjacent empty lines within selectors.
        'selector-max-empty-lines': 0,

        // Limit the number of id selectors in a selector.
        'selector-max-id': 1,

        // Limit the specificity of selectors.
        'selector-max-specificity': '1,4,1',

        // Limit the number of type in a selector.
        'selector-max-type': 2,

        // Limit the number of universal selectors in a selector.
        'selector-max-universal': 2,

        // Specify a pattern for the selectors of rules nested within rules.
        'selector-nested-pattern': '',

        // Disallow qualifying a selector by type.
        'selector-no-qualifying-type': true,

        // Disallow vendor prefixes for selectors.
        'selector-no-vendor-prefix': null,

        // Specify a blacklist of disallowed pseudo-class selectors.
        // 'selector-pseudo-class-blacklist': [],

        // Specify a whitelist of allowed pseudo-class selectors.
        // 'selector-pseudo-class-whitelist': [],

        // Specify a blacklist of disallowed pseudo-element selectors.
        // 'selector-pseudo-element-blacklist': [],

        // Specify a whitelist of allowed pseudo-element selectors.
        // 'selector-pseudo-element-whitelist': [],

        // MEDIA FEATURE ==================================
        // Specify a blacklist of disallowed media feature names.
        // 'media-feature-name-blacklist': [],

        // Disallow vendor prefixes for media feature names.
        'media-feature-name-no-vendor-prefix': null,

        // Specify a whitelist of allowed media feature names.
        // 'media-feature-name-whitelist': [],

        // CUSTOM MEDIA ===================================
        // Specify a pattern for custom media query names.
        'custom-media-pattern': '',

        // AT-RULE ========================================
        // Specify a blacklist of disallowed at-rules.
        // 'at-rule-blacklist': [],

        // Disallow vendor prefixes for at-rules.
        'at-rule-no-vendor-prefix': null,

        // Specify a whitelist of allowed at-rules.
        // 'at-rule-whitelist': [],

        // COMMENT ========================================
        // Specify a blacklist of disallowed words within comments.
        // 'comment-word-blacklist': [],

        // GENERAL / SHEET ================================
        // Limit the depth of nesting.
        'max-nesting-depth': 4,
        // Disallow unknown animations.
        'no-unknown-animations': true,
    },
};
