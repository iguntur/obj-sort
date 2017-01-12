'use strict';

function sorted(obj, order) {
	if (typeof obj !== 'object' || Array.isArray(obj)) {
		throw new TypeError('Expected obj should be a plain object');
	}

	order = order || 'asc';

	if (typeof order !== 'string') {
		throw new TypeError(`Expected 'order' type to be of type 'string', got ${typeof order}`);
	}

	if (!/(asc|desc|ASC|DESC)/i.test(order)) {
		throw new Error('Expected order type should be equal `asc` or `desc`');
	}

	const ret = {};
	let keys = Object.keys(obj).sort();

	if (/(desc|DESC)/i.test(order)) {
		keys = Object.keys(obj).reverse();
	}

	for (const i of keys) {
		ret[i] = obj[i];

		if (typeof ret[i] === 'object' && !Array.isArray(ret[i])) {
			ret[i] = sorted(ret[i], order);
		}
	}

	return ret;
}

module.exports = sorted;
