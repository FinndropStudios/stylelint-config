# stylelint-config-finndropstudios

This package provides Finndrop Studios' CSS/SCSS stylelint as an extensible shared config.

## Install

Install via npm:

Install the correct versions of each package, which are listed by the command:

```sh
npm info "@finndropstudios/stylelint-config@latest" peerDependencies
```

Linux/OSX users can run

```sh
(
    export PKG="@finndropstudios/stylelint-config";
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save dev @finndropstudios/stylelint-config stylelint@^#.#.# stylelint-declaration-block-no-ignored-properties@^#.#.# stylelint-scss@^#.#.#
```

Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @finndropstudios/stylelint-config
```

## Usage

### stylelint-config-finndropstudios

Our configuration contains all of our StyleLint rules, including SCSS. It requires `stylelint`, `stylelint-declaraion-block-no-ignored-properties` and `stylelint-scss`.

Add `"extends": "@finndropstudios/stylelint-config"` to your .stylelintrc
