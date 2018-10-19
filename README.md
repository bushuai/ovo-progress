# ovo-progress

🌈 Page scroll with progress

[![version](https://img.shields.io/npm/v/ovo-progress.svg?style=flat-square)](http://npm.im/ovo-progress)
[![downloads](https://img.shields.io/npm/dm/ovo-progress.svg?style=flat-square)](http://npm-stat.com/charts.html?package=ovo-progress)
[![MIT License](https://img.shields.io/npm/l/ovo-progress.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## TODO

- [x] use rollup
- [ ] vue plugin
- [ ] react component

## Installation

```bash
# npm
$ npm i ovo-progress

# yarn
$ yarn add ovo-progress
```

## Usage

```javascript
 import Progress from 'ovo-progress'

 new Progress({ /* options */ })
```

## Options

|Option|Type|Default|Description|
|---|---|---|---|
|height|`string`|`3px`|the height of progress.|
|color|`string`|`#2980B9`|the color of progress.|
|onReachBottom|`function`|`noop`|invoked when page scroll to the bottome of the document|
|onReachTop|`function`|`noop`|invoked when page scroll to the top of the document|

## License

MIT &copy; bushuai