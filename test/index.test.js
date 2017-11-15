import { expect } from'chai';
import objectKeyMirror from '../src/index';

describe('objectKeyMirror', function() {
  it('should return an object when an array supplied', function() {
      expect(objectKeyMirror(['LOGIN_SUCCESS']))
        .to.be.an('object');
  });

  it('should create an object with keys and properties of array supplied', 
    function() {
      expect(objectKeyMirror(['LOGIN_SUCCESS', 'SIGNUP_SUCCESS', 'LOGIN_FAILURE']))
        .to.deep.equal({ LOGIN_SUCCESS: 'LOGIN_SUCCESS',SIGNUP_SUCCESS: 'SIGNUP_SUCCESS', LOGIN_FAILURE: 'LOGIN_FAILURE' });

      expect(objectKeyMirror(['LOGIN_SUCCESS'])).to.deep
      .equal({ LOGIN_SUCCESS: 'LOGIN_SUCCESS' });

      expect(objectKeyMirror([1, 2, 3, 4])).to.deep
        .equal({ 1: '1', 2: '2', 3: '3', 4: '4' });
      
      expect(objectKeyMirror(['john', 'doe', 'amos', 'smith'])).to.deep
        .equal({ john: 'john', doe: 'doe', amos: 'amos', smith: 'smith' });

      expect(objectKeyMirror(['john smith', 'doe', 'philip', 'smith'])).to.deep
        .equal({ 
          "john smith": 'john smith', 
          doe: 'doe', 
          philip: 'philip', 
          smith: 'smith' 
        });
  });
  
});