/**
 * Exercises: array methods
 * Implement the test cases, then run: node exercises.js
 *
 * Every test case has the following properties:
 *
 * {
 *   id:      // Optional (default: sequential test case number).
 *   goal:    // Description of the test function expectation.
 *   args:    // Optional. Array of test function arguments (default: []).
 *   expect:  // Expected test function result.
 *   hint:    // Optional hint (will be displayed if test fails).
 *   test:    // Test function. It will be invoked with `args`
 *            // and tested that its return value matches `expect`.
 * }
 *
 */
import {test} from "../lib/test.js";

let exercises = [

  // {
  //   goal: "",
  //   args: [],
  //   expect: 0,
  //   hint: "",
  //   test: function() {
  //   }
  // },

  {
    goal: "Create an empty array",
    expect: [],
    hint: "Use the literal array syntax",
    test: function() {
      return [];
    }
  },
  {
    goal: "Create an empty array",
    expect: [],
    hint: "Don't use literal array syntax, create as object",
    test: function() {
      return new Array();
    }
  },

  {
    goal: "Create a 5 element array of sequential numbers from 0 to 4",
    expect: [0,1,2,3,4],
    test: function() {
      return [0,1,2,3,4];
    }
  },

  {
    goal: "Create an empty array of length 5",
    expect: [undefined, undefined, undefined, undefined, undefined],
    test: function() {
      return new Array(5);
    }
  },

  {
    goal: "Create an array of length 3 filled with '*",
    expect: ['*', '*', '*'],
    test: function() {
      return (new Array(3)).fill('*');
    }
  },

  {
    goal: "Verify that the argument is an array",
    args: [[]], // the first arg is an empty array
    expect: true,
    test: function(a) {
      return Array.isArray(a);
    }
  },

  {
    goal: "Verify that the third argument is an array",
    args: ["a", "b", ["c", "d"]],
    expect: true,
    test: function(arg0, arg1, arg2) {
      return Array.isArray(arg2);
    }
  },

  {
    goal: "Verify that the third argument is not an array",
    args: [["a", "b"], "c", "d"],
    expect: true,
    test: function(arg0, arg1, arg2) {
      return !Array.isArray(arg2);
    }
  },

  {
    goal: "Create an array that is a copy of another array",
    args: [[1,2,3]],
    expect: [1,2,3],
    test: function(a) {
      return Array.from(a);
    }
  },

  {
    goal: "Create an array from the characters of a string",
    args: ["abc"],
    expect: ["a", "b", "c"],
    hint: "Another way is to use s.split('')",
    test: function(s) {
      // using Array.from
      return Array.from(s);

      // using String.split
      // return s.split("");

      // by iterating
      // let a = [];
      // for (let i = 0; i < s.length; i++) {
      //   a[i] = s[i];
      // }
      // return a;
   }
  },

  {
    goal: "Create an array from a list of arguments (1, 2, 3)",
    expect: [1,2,3],
    hint: "Use a static method of Array",
    test: function(a, b, c) {
      return Array.of(1, 2, 3)
    }
  },

  {
    goal: "Given an array a, return the length of the array",
    args: [[0,1,2,3,4]],
    expect: 5,
    test: function(a) {
      return a.length;
    }
  },

  {
    goal: "Given an array a, return the second element using array syntax",
    args: [[0,1,2,3,4]],
    expect: 1,
    test: function(a) {
      return a[1];
    }
  },

  {
    goal: "Given an array a, return the last element using array syntax",
    args: [[0,1,2,3,4]],
    expect: 4,
    test: function(a) {
      return a[a.length - 1];
    }
  },

  {
    goal: "Given an array a, return the last element, but don't use array syntax",
    hint: "Use a method on the array",
    args: [[0,1,2,3,4]],
    expect: 4,
    test: function(a) {
      return a.at(-1);
    }
  },

  {
    goal: "Given arrays a and b, return the concatenation of a and b",
    args: [[0,1,2], [3,4]],
    expect: [0,1,2,3,4],
    test: function(a, b) {
      return a.concat(b);
    }
  },

  {
    goal: "Given arrays a and b, return the concatenation of a and b",
    args: [[0,1,2], [3,4]],
    expect: [0,1,2,3,4],
    test: function(a, b) {
      return a.concat(b);
    }
  },

]

test(exercises);
