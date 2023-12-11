import stylex from '@stylexjs/stylex';

/**
 * https://stylexjs.com/docs/learn/theming/defining-variables/
 */
export const tokens = stylex.defineVars({
  primaryText: 'green',
  secondaryText: '#333',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});