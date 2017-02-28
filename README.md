# hissyfit

Really simple Error constructor for Javascript.

## Install

```sh
npm install hissyfit
```

## Why?

Because this looks so ugly:

```js
throw Object.assign(new Error('Oops we haz problem'), {
  name: 'StrangeError',
  status: 500,
  detail: quirkyState,
});
```

Instead, this:

```js
import Err from 'hissyfit';

throw new Err({
  name: 'NiceError',
  message: 'Broken but beautiful',
  status: 500,
  detail: quirkyState,
});
```
