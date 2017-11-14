# Object Key Mirror
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 
[![Build Status](https://travis-ci.org/temilaj/object-key-mirror.svg?branch=master)](https://travis-ci.org/temilaj/object-key-mirror)
[![npm](https://img.shields.io/npm/v/object-key-mirror.svg)](https://www.npmjs.com/package/object-key-mirror)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Object key mirror is a simple and intuitive way to created objects with values equal to its key names.
It's super light weight, and the core library has zero dependencies.

If you're one to define constants for your action types when managing state in complex applicaitons, you'll totally love object key mirror!. Infact, it's Inspired by Facebook's keyMirror.

## Installation

```
npm install object-key-mirror --save
```

## Usage

```js
import mirrorKeys from 'object-key-mirror';

const actionTypes = mirrorKeys(['LOGIN_SUCCESS', 'SIGNUP_SUCCESS', 'LOGIN_FAILURE']); 

// output
{ 
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS', 
  LOGIN_FAILURE: 'LOGIN_FAILURE' 
}

const names = mirrorKeys(['john smith', 'doe', 'philip', 'smith']); 

// output
{ 
  "john smith": 'john smith', 
  doe: 'doe', 
  philip: 'philip', 
  smith: 'smith' 
}
```

## LICENSE

#### [MIT](./LICENSE) © [Temi Lajumoke](https://temilajumoke.com)