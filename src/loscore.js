// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    let newArray = [];
    let found = false;
    for (let x = 0; x < array.length; x++) {
      for (let i = 0; i < newArray.length; i++) {
        if (array[x] === newArray[i]) {
          found = true;
        }
      }
      if (found === false) {
        newArray.push(array[x]);
      }
      found = false;
    }
    return newArray;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    let newArray = [];
    this.each(collection, function(value) {
      return newArray.push(iteratee(value));
    });
    return newArray;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    let newArray = [];
    this.filter(collection, function(value) {
      if (test(value) == false) {
        return newArray.push(value);
      }
    });
    return newArray;
  }

  reduce(collection, iterator, accumulator) {
    let result = accumulator;
    this.each(collection, function(value, index) {
      if (accumulator === undefined && index === 0) {
        result = value;
      } else {
        result = iterator(result, value);
      }
    });
    return result;
  }

  every(collection, test) {
    if (!test) {
      return true;
    }
    return this.reduce(
      collection,
      function(passed, value) {
        if (!passed) {
          return false;
        } else {
          return test(value);
        }
      },
      true
    );
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    let argumentsArray = [];
    for (let x = 1; x < arguments.length; x++) {
      argumentsArray.push(arguments[x]);
    }
    this.each(argumentsArray, (object) => {
      this.each(object, (value, key) => {
        obj[key] = value;
      });
    });
    return obj;
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let ran = false;
    let results;
    return function(...args) {
      if (ran === false) {
        ran = true;
        results = func(...args);
      }
      return results;
    };
  }

  memoize(func) {
    const cache = [];
    let output;
    return function(...args) {
      let value = args[0];
      if (value in cache) {
        cache.push(value);
      } else {
        output = func(value);
        cache[value] = output;
        return output;
      }
    };
  }

  invoke(collection, functionOrKey) {}

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
