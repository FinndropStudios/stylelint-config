module.exports = {
    plugins: [
        'stylelint-scss',
    ],
    rules: {
        // @-ELSE
        // Require or disallow a newline after the closing brace of @else statements.
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

        // Require a single space or disallow whitespace after the closing brace of @else statements.
        'scss/at-else-closing-brace-space-after': 'always-intermediate',

        // Require an empty line or disallow empty lines before @-else.
        'scss/at-else-empty-line-before': 'never',

        // Require or disallow a space before @else if parentheses.
        'scss/at-else-if-parentheses-space-before': 'always',

        // @-EXTEND
        // Disallow at-extends (@extend) with missing placeholders.
        'scss/at-extend-no-missing-placeholder': true,

        // @-FUNCTION
        // Require named parameters in SCSS function call rule.
        'scss/at-function-named-arguments': null,

        // Require or disallow a space before @function parentheses.
        'scss/at-function-parentheses-space-before': 'always',

        // Specify a pattern for Sass/SCSS-like function names.
        // 'scss/at-function-pattern': '',

        // @-IF
        // Require or disallow a newline after the closing brace of @if statements.
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

        // Require a single space or disallow whitespace after the closing brace of @if statements.
        'scss/at-if-closing-brace-space-after': 'always-intermediate',

        // @-IMPORT
        // Disallow leading underscore in partial names in @import.
        'scss/at-import-no-partial-leading-underscore': true,

        // Specify blacklist of disallowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-blacklist': ['scss'],

        // Specify whitelist of allowed file extensions for partial names in @import commands.
        // 'scss/at-import-partial-extension-whitelist': [],

        // @-MIXIN
        // Require or disallow parentheses in argumentless @mixin calls.
        'scss/at-mixin-argumentless-call-parentheses': 'always',

        // Require named parameters in at-mixin call rule.
        'scss/at-mixin-named-arguments': null,

        // Require or disallow a space before @mixin parentheses.
        'scss/at-mixin-parentheses-space-before': 'always',

        // Specify a pattern for Sass/SCSS-like mixin names.
        // 'scss/at-mixin-pattern': '',

        // @-RULE
        // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
        'scss/at-rule-no-unknown': true,

        // $-VARIABLE
        // Require a newline after the colon in $-variable declarations.
        'scss/dollar-variable-colon-newline-after': null,

        // Require or disallow whitespace after the colon in $-variable declarations.
        'scss/dollar-variable-colon-space-after': 'always-single-line',

        // Require a single space or disallow whitespace before the colon in $-variable declarations.
        'scss/dollar-variable-colon-space-before': 'never',

        // Require !default flag for $-variable declarations.
        'scss/dollar-variable-default': null,

        // Require a single empty line or disallow empty lines before $-variable declarations.
        'scss/dollar-variable-empty-line-before': ['always', {
            except: ['first-nested', 'after-comment', 'after-dollar-variable'],
        }],

        // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
        'scss/dollar-variable-no-missing-interpolation': true,

        // Specify a pattern for Sass-like variables.
        // 'scss/dollar-variable-pattern': '',

        // %-PLACEHOLDER
        // Specify a pattern for %-placeholders.
        // 'scss/percent-placeholder-pattern': '',

        // //-COMMENT
        // Require or disallow an empty line before //-comments.
        'scss/double-slash-comment-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands'],
        }],

        // Require or disallow //-comments to be inline comments.
        'scss/double-slash-comment-inline': ['never', {
            ignore: ['stylelint-commands'],
        }],

        // Require or disallow whitespace after the // in //-comments
        'scss/double-slash-comment-whitespace-inside': 'always',

        // DECLARATION
        // Require or disallow properties with - in their names to be in a form of a nested group.
        'scss/declaration-nested-properties': 'never',

        // Disallow nested properties of the same "namespace" be divided into multiple groups.
        'scss/declaration-nested-properties-no-divided-groups': true,

        // MEDIA FEATURE
        // Require a media feature value be a $-variable or disallow $-variables in media feature values.
        'scss/media-feature-value-dollar-variable': null,

        // OPERATOR
        // Disallow linebreaks after Sass operators.
        'scss/operator-no-newline-after': true,

        // Disallow linebreaks before Sass operators.
        'scss/operator-no-newline-before': true,

        // Disallow unspaced operators in Sass operations.
        'scss/operator-no-unspaced': true,

        // PARTIAL
        // Disallow non-CSS @imports in partial files.
        'scss/partial-no-import': true,

        // SELECTOR
        // Disallow redundant nesting selectors (&).
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
