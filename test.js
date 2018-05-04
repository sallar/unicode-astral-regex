import test from 'ava';
import regex from './';

test('arrays are equal', t => {
  t.deepEqual('✨♥️💎🙌🏾'.match(regex), ['✨', '♥️', '💎', '🙌🏾']);
});
