export function log(message, level = 0, type = 'component') {
  let styling =
    'padding: 0.15rem; background: #04406b; color: #fcfabd';

  if (type === 'other') {
    styling = 'padding: 0.15rem; background: #210957; color: #ede6b2';
  }

  const indent = '- '.repeat(level);

  // '%c' is a directive for console.log to apply CSS styles to the output. The styles are defined in the 'styling' variable.
  console.log('%c' + indent + message, styling);
}
