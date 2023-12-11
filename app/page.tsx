import stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';

/**
 * stylex.createThemeを使用することでオーバーライドが可能
 * https://stylexjs.com/docs/learn/theming/creating-themes/
 */
const override = stylex.createTheme(tokens, {
  primaryText: 'blue',
  secondaryText: '#333',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});

export default function Home() {
  return (
    <div {...stylex.props(override)}>
      <main>
        <div {...stylex.props(styles.text)}>test</div>
      </main>
    </div>
  );
}

const styles = stylex.create({
  text: {
    backgroundColor: 'red',
    /**
     * デザイントークンをimportして使用できる
     * https://stylexjs.com/docs/learn/theming/using-variables/
     */
    color: tokens.primaryText,
    width: 100,
    height: 100,
  },
});
