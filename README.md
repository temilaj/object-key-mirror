# Object Key Mirror

Object key mirror is a zero-dependency Node.js module that lets you easily create objects with 
values equal to their key names. 

If you're one to define constants for your action types when managing state in complex applications, you'll totally love object key mirror! In fact, it's Inspired by Facebook's keyMirror.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 
[![Build Status](https://travis-ci.org/temilaj/object-key-mirror.svg?branch=master)](https://travis-ci.org/temilaj/object-key-mirror) 
[![npm](https://img.shields.io/npm/v/object-key-mirror.svg)](https://www.npmjs.com/package/object-key-mirror) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

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