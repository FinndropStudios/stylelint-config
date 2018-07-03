# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2018-04-12
### Changed
- `scss/at-function-named-arguments` to `null`
- `scss/at-mixin-named-arguments` to `null`
- `scss/dollar-variable-colon-newline-after` to `null`
- `at-rule-no-unknown` to ignore `function`, `include`, `if`, `else`, `else if`, `mixin`, `each` and `extend`
- `at-rule-empty-line-before` to except `after-same-name` and `first-nested` and ignore `inside-block` and `after-comment`
- `rule-empty-line-before` to except `after-single-line-comment` and `first-nested`
- `max-empty-lines` to `2`
- Update dependencies

## [0.2.0] - 2018-04-11
### Changed
- Update stylelint and stylelint-scss peer dependencies

## [0.1.4] - 2018-04-11
### Changed
- Rule 'block-closing-brace-empty-line-before' to 'never'

## [0.1.3] - 2018-04-09
### Added
- npmignore

### Changed
- Update npm publish scripts

### Fixed
- Stylelint rules

## [0.1.2] - 2018-03-19
### Fixed
- Add require resolve to extends config

## [0.1.1] - 2018-03-19
### Added
- npmrc to disable package lock
- editorconfig

## [0.1.0] - 2018-03-19
### Added
- stylelint-declaration-block-no-ignored-properties plugin and settings
- stylelint configuration setup
