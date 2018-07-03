module.exports = {
    rules: {
        // COLOR ==========================================
        // Disallow invalid hex colors.
        'color-no-invalid-hex': true,

        // FONT FAMILY ====================================
        // Disallow duplicate font family names.
        'font-family-no-duplicate-names': true,

        // Disallow missing generic families in lists of font family names.
        'font-family-no-missing-generic-family-keyword': true,

        // FUNCTION =======================================
        // Disallow an unspaced operator within calc functions.
        'function-calc-no-unspaced-operator': true,

        // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
        'function-linear-gradient-no-nonstandard-direction': true,

        // STRING =========================================
        // Disallow (unescaped) newlines in strings.
        'string-no-newline': true,

        // UNIT ===========================================
        // Disallow unknown units.
        'unit-no-unknown': true,

        // PROPERTY =======================================
        // Disallow unknown properties.
        'property-no-unknown': [true, {
            checkPrefixed: false,
        }],

        // KEYFRAME DECLARATION ===========================
        // Disallow !important within keyframe declarations.
        'keyframe-declaration-no-important': true,

        // DECLARATION BLOCK ==============================
        // Disallow duplicate properties within declaration blocks.
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates-with-different-values'],
        }],

        // Disallow shorthand properties that override related longhand properties within declaration blocks.
        'declaration-block-no-shorthand-property-overrides': true,

        // BLOCK ==========================================
        // Disallow empty blocks.
        'block-no-empty': true,

        // SELECTOR =======================================
        // Disallow unknown pseudo-class selectors.
        'selector-pseudo-class-no-unknown': true,

        // Disallow unknown pseudo-element selectors.
        'selector-pseudo-element-no-unknown': true,

        // Disallow unknown type selectors.
        'selector-type-no-unknown': true,

        // MEDIA FEATURE ==================================
        // Disallow unknown media feature names.
        'media-feature-name-no-unknown': true,

        // AT-RULE ========================================
        // Disallow unknown at-rules.
        'at-rule-no-unknown': [true, {
            ignoreAtRules: ['function', 'include', 'if', 'else', 'else if', 'mixin', 'each', 'extend'],
        }],

        // COMMENT ========================================
        // Disallow empty comments.
        'comment-no-empty': true,

        // GENERAL / SHEET ================================
        // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
        'no-descending-specificity': true,

        // Disallow duplicate @import rules within a stylesheet.
        'no-duplicate-at-import-rules': true,

        // Disallow duplicate selectors.
        'no-duplicate-selectors': true,

        // Disallow empty sources.
        'no-empty-source': true,

        // Disallow extra semicolons.
        'no-extra-semicolons': true,

        // Disallow double-slash comments (//...) which are not supported by CSS.
        'no-invalid-double-slash-comments': true,
    },
};
