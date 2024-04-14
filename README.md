# Fancade Plus

[![license](https://custom-icon-badges.demolab.com/github/license/brckd/fancade-plus?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

A userscript to make [Fancade Web](https://play.fancade.com) more accessible on mobile.

## Features

- Install Fancade Web like a native app
- Also install games separately
- Jump right into full-screen game play
- Say goodbye to pesky cookie settings
- Use floating button to trigger keyboard actions
- Create faster with physical keyboard support
- Enjoy overall increased feature parity

## Using

Install the
[latest userscript](https://github.com/brckd/fancade-plus/releases/latest/download/fancade-plus.user.js)
in a browser that supports doing so.

- [Cromite](https://github.com/uazo/cromite) and Bromite
  [support userscripts natively](https://github.com/bromite/bromite/wiki/UserScripts).
- [Kiwi](https://kiwibrowser.com) and Firefox mobile derivatives like [Mull](https://gitlab.com/divested-mobile/mull-fenix)let you
  [install userscript managers](https://openuserjs.org/about/Userscript-Beginners-HOWTO#how-do-i-get-going-)
  as addons.
The browsers linked above have been tested to work on both my android phone and tablet.

Then head over to [Fancade Web](https://play.fancade.com) and install the web app. To install a game separately, just visit its url and install it.

## Building

Enter ze repo.

```sh
git clone https://github.com/brckd/fancade-plus
cd fancade-plus
```

Install ze dependencies.

```sh
npm ci
bun install
yarn install
pnpm install
```

Ze package can be built locally using the `build` script.

```sh
npm run build
bun run build
yarn run build
pnpm run build
```
