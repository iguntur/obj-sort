import test from 'ava';
import sorted from './';

test('asc - default sorted object', t => {
	t.deepEqual(sorted({b: 'b', a: 'a'}), {a: 'a', b: 'b'});
	t.deepEqual(sorted({b: 'b', a: 'a', c: [0, 1]}, 'asc'), {a: 'a', b: 'b', c: [0, 1]});
	t.deepEqual(sorted({
		b: 'b',
		c: ['y', 'x'],
		a: {y: 'x', x: 'y', n: {foo: 'foo', bar: 'bar'}}
	}), {
		a: {n: {bar: 'bar', foo: 'foo'}, x: 'y', y: 'x'},
		b: 'b',
		c: ['y', 'x']
	});
});

test('desc - sorted object', t => {
	t.deepEqual(sorted({b: 'b', a: 'a', c: [1, '2']}, 'desc'), {c: [1, '2'], b: 'b', a: 'a'});
	t.deepEqual(sorted({
		a: {n: {bar: 'bar', foo: 'foo'}, x: 'y'},
		c: ['y', 'x'],
		b: 'b'
	}, 'DESC'), {
		c: ['y', 'x'],
		b: 'b',
		a: {x: 'y', n: {foo: 'foo', bar: 'bar'}}
	});
});

test('throws', t => {
	t.notThrows(() => sorted({}));
	t.notThrows(() => sorted({}, ''));
});
