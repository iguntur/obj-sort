# obj-sort [![Build Status](https://travis-ci.org/iguntur/obj-sort.svg?branch=master)](https://travis-ci.org/iguntur/obj-sort)

> Order object by ascending or descending


## Install

```
$ npm install --save obj-sort
```


## Usage

```js
const objSort = require('obj-sort');

// ascending by default
objSort({
    b: 'b',
    c: ['y', 'x'],
    a: {y: 'x', x: 'y', n: {foo: 'foo', bar: 'bar'}}
});
/*
{
    a: {n: {bar: 'bar', foo: 'foo'}, x: 'y', y: 'x'},
    b: 'b',
    c: ['y', 'x']
}
*/

// descending
objSort({
    a: {n: {bar: 'bar', foo: 'foo'}, x: 'y'},
    c: ['y', 'x'],
    b: 'b'
}, 'desc');
/*
{
    c: ['y', 'x'],
    b: 'b',
    a: {x: 'y', n: {foo: 'foo', bar: 'bar'}}
}
*/
```


## API

### objSort(obj, order)

Returns an object

#### obj

Type: `object`

#### order

Type: `string` <br>
Options: `asc`, `desc` <br>
Default: `asc`

Set order type object


## License

MIT © [Guntur Poetra](http://iguntur.starmediateknik.com)
