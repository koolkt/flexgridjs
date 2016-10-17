/*
 * Taken from flexboxgrid.com
 */

import D from 'decimal.js-light';

const GoldenR = new D(1.61803551232);

export function goldenNumber(size) {
  if (size === 1) {
    return GoldenR;
  }
  return GoldenR.times(goldenNumber(size - 1));
}

export const goldenFontSize = s => ({ fontSize: `${goldenNumber(s)}em` });

export const container = {
  marginRight: 'auto',
  marginLeft: 'auto',
};

export const containerFluid = {
  ...container,
  paddingRight: '2rem',
  paddingLeft: '2rem',
};

export const row = {
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

export const rowReverse = {
  flexDirection: 'row-reverse',
};

export const colReverse = {
  flexDirection: 'column-reverse',
};

export const col = {
  flex: '0 0 auto',
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem',
};

export const unit = new D(8.3333);
export const genColSize = size => ({
  ...col,
  MsFlexPreferredSize: `${unit.times(size)}%`,
  flexBasis: `${unit.times(size)}%`,
  maxWidth: `${unit.times(size)}%`,
});

export const genColOffset = size => ({
  ...col,
  marginLeft: `${unit.times(size)}%`,
});

/* export const colAutoScale = {
 *   WebkitBoxFlex: 1,
 *   MsFlexPositive: 1,
 *   flexGrow: 1,
 *   MsFlexPreferredSize: 0,
 *   flexBasis: 0,
 *   maxWidth: '100%',
 * };
 * */
/* export const start = {
 *   WebkitBoxPack: 'start',
 *   MsFlexPack: 'start',
 *   justifyContent: 'flex-start',
 *   textAlign: 'start',
 * };
 *
 * export const center = {
 *   WebkitBoxPack: 'center',
 *   MsFlexPack: 'center',
 *   justifyContent: 'center',
 *   textAlign: 'center',
 * };
 *
 * export const end = {
 *   WebkitBoxPack: 'end',
 *   MsFlexPack: 'end',
 *   justifyContent: 'flex-end',
 *   textAlign: 'end',
 * };
 *
 * export const top = {
 *
 *   alignItems: 'flex-start',
 * };
 *
 * export const middle = {
 *   WebkitBoxAlign: 'center',
 *   MsFlexAlign: 'center',
 *   alignItems: 'center',
 * };
 *
 * export const bottom = {
 *   WebkitBoxAlign: 'end',
 *   MsFlexAlign: 'end',
 *   alignItems: 'flex-end',
 * };
 *
 * export const around = {
 *   MsFlexPack: 'distribute',
 *   justifyContent: 'space-around',
 * };
 *
 * export const between = {
 *   WebkitBoxPack: 'justify',
 *   MsFlexPack: 'justify',
 *   justifyContent: 'space-between',
 * };
 *
 * export const first = {
 *   WebkitBoxOrdinalGroup: 0,
 *   MsFlexOrder: -1,
 *   order: -1,
 * };
 *
 * export const last = {
 *   WebkitBoxOrdinalGroup: 2,
 *   MsFlexOrder: 1,
 *   order: 1,
 * };*/
