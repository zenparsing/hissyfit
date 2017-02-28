'use strict';

const HissyFit = require('./');
const assert = require('assert');

const tests = {

  'no arguments'() {
    let err = new HissyFit();
    assert.equal(err.name, 'Error');
    assert.ok(err.stack);
  },

  'non-object arguments throw'() {
    assert.throws(() => new HissyFit(null));
    assert.throws(() => new HissyFit('abc'));
    assert.throws(() => new HissyFit(123));
  },

  'properties are copied'() {
    let detail = {};
    let err = new HissyFit({
      name: 'MyError',
      message: 'my message',
      detail,
    });
    assert.equal(err.name, 'MyError');
    assert.equal(err.message, 'my message');
    assert.equal(err.detail, detail);
  },

};

Object.keys(tests).forEach(key => {
  let value = tests[key];
  tests[key]();
  console.log(key + ' - ok');
});
