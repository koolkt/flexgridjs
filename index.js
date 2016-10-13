'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = exports.first = exports.between = exports.around = exports.bottom = exports.middle = exports.top = exports.end = exports.center = exports.start = exports.colAutoScale = exports.genColOffset = exports.genColSize = exports.unit = exports.col = exports.colReverse = exports.rowReverse = exports.row = exports.containerFluid = exports.container = exports.goldenFontSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Taken from flexboxgrid.com
                                                                                                                                                                                                                                                                   */

exports.goldenNumber = goldenNumber;

var _decimal = require('decimal.js-light');

var _decimal2 = _interopRequireDefault(_decimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoldenR = new _decimal2.default(1.61803551232);

function goldenNumber(size) {
  if (size === 1) {
    return GoldenR;
  }
  return GoldenR.times(goldenNumber(size - 1));
}

var goldenFontSize = exports.goldenFontSize = function goldenFontSize(s) {
  return { fontSize: goldenNumber(s) + 'em' };
};

var container = exports.container = {
  marginRight: 'auto',
  marginLeft: 'auto'
};

var containerFluid = exports.containerFluid = _extends({}, container, {
  paddingRight: '2rem',
  paddingLeft: '2rem'
});

var row = exports.row = {
  boxSizing: 'border-box',
  display: 'flex',
  WebkitBoxFlex: '0',
  MsFlex: '0 1 auto',
  flex: '0 1 auto',
  WebkitBoxOrient: 'horizontal',
  WebkitBoxDirection: 'normal',
  MsFlexDirection: 'row',
  flexDirection: 'row',
  MsFlexWrap: 'wrap',
  flexWrap: 'wrap'
};

var rowReverse = exports.rowReverse = {
  WebkitBoxOrient: 'horizontal',
  WebkitBoxDirection: 'reverse',
  MsFlexDirection: 'row-reverse',
  flexDirection: 'row-reverse'
};

var colReverse = exports.colReverse = {
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'reverse',
  MsFlexDirection: 'column-reverse',
  flexDirection: 'column-reverse'
};

var col = exports.col = {
  boxSizing: 'border-box',
  WebkitBoxFlex: '0',
  MsFlex: '0 0 auto',
  flex: '0 0 auto',
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem'
};

var unit = exports.unit = new _decimal2.default(8.3333);
var genColSize = exports.genColSize = function genColSize(size) {
  return _extends({}, col, {
    MsFlexPreferredSize: unit.times(size) + '%',
    flexBasis: unit.times(size) + '%',
    maxWidth: unit.times(size) + '%'
  });
};

var genColOffset = exports.genColOffset = function genColOffset(size) {
  return _extends({}, col, {
    marginLeft: unit.times(size) + '%'
  });
};

var colAutoScale = exports.colAutoScale = {
  WebkitBoxFlex: 1,
  MsFlexPositive: 1,
  flexGrow: 1,
  MsFlexPreferredSize: 0,
  flexBasis: 0,
  maxWidth: '100%'
};

var start = exports.start = {
  WebkitBoxPack: 'start',
  MsFlexPack: 'start',
  justifyContent: 'flex-start',
  textAlign: 'start'
};

var center = exports.center = {
  WebkitBoxPack: 'center',
  MsFlexPack: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

var end = exports.end = {
  WebkitBoxPack: 'end',
  MsFlexPack: 'end',
  justifyContent: 'flex-end',
  textAlign: 'end'
};

var top = exports.top = {
  WebkitBoxAlign: 'start',
  MsFlexAlign: 'start',
  alignItems: 'flex-start'
};

var middle = exports.middle = {
  WebkitBoxAlign: 'center',
  MsFlexAlign: 'center',
  alignItems: 'center'
};

var bottom = exports.bottom = {
  WebkitBoxAlign: 'end',
  MsFlexAlign: 'end',
  alignItems: 'flex-end'
};

var around = exports.around = {
  MsFlexPack: 'distribute',
  justifyContent: 'space-around'
};

var between = exports.between = {
  WebkitBoxPack: 'justify',
  MsFlexPack: 'justify',
  justifyContent: 'space-between'
};

var first = exports.first = {
  WebkitBoxOrdinalGroup: 0,
  MsFlexOrder: -1,
  order: -1
};

var last = exports.last = {
  WebkitBoxOrdinalGroup: 2,
  MsFlexOrder: 1,
  order: 1
};