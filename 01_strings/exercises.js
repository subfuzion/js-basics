/**
 * Exercises: string methods
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
  {
    goal: "Given a string s, return a copy of the string converted to uppercase",
    args: ["abacadabra"],
    expect: "ABACADABRA",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return a copy of the string converted to lowercase",
    args: ["ABACADABRA"],
    expect: "abacadabra",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the first character of s",
    args: ["Hello"],
    expect: "H",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the last character of s",
    args: ["Hello"],
    expect: "o",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the middle character of s",
    args: ["Hello"],
    expect: "l",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the middle character of s",
    hint: "Take the length of s, divide by 2, and use that as the index",
    args: ["javascript"],
    expect: "c",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the character code of the first character",
    args: ["A"],
    expect: 65,
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return the character code of the second character",
    args: ["Aa"],
    expect: 97,
    test: function(s) {
    }
  },

  {
    goal: "Given a string s and a character ch, return the index of ch in s",
    args: ["Cormac", "m"],
    expect: 3,
    test: function(s, ch) {
    }
  },

  {
    goal: "Given a string s and a number start, return a substring of s from start to the end",
    args: ["Cormac", 3],
    expect: "mac",
    test: function(s, start) {
    }
  },

  {
    goal: "Given a string s and number end, return a new string starting from the beginning of s up to the character at end (exclusive)",
    args: ["Cormac", 3],
    expect: "Cor",
    test: function(s, index) {
    }
  },

  {
    goal: "Given a string s, return a new string without the first and last characters of s",
    args: ["Cormac"],
    expect: "orma",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, split s into an array of strings using 'a' as the delimiter",
    args: ["banana"],
    expect: ["b", "n", "n", ""],
    test: function(s) {
    }
  },

  {
    goal: "Given a string s and an index, return the character at the index",
    args: ["banana", -1],
    expect: "a",
    test: function(s, index) {
    }
  },

  {
    goal: "Given a string s, return a copy of s with all leading spaces removed",
    args: ["     hello  "],
    expect: "hello  ",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return a copy of s with all trailing spaces removed",
    args: ["     hello  "],
    expect: "     hello",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return a copy of s with all leading and trailing spaces removed",
    args: ["     hello  "],
    expect: "hello",
    test: function(s) {
    }
  },

  {
    goal: "Given a string s, return a string padded with trailing asterisks (*) to ensure the total string length is 5",
    args: ["ab"],
    expect: "ab***",
    test: function(n) {
    }
  },

  {
    goal: "Given a number n, return a string padded with leading spaces to ensure the total string length is 5",
    args: [10],
    expect: "   10",
    test: function(n) {
    }
  },

  {
    goal: "Given a string s, return a string that is s repeated number count times",
    args: ["woof", 3],
    expect: "woofwoofwoof",
    test: function(s, count) {
    }
  },

  {
    goal: "Given strings s and t, return true if s includes t",
    args: ["Cormac", "mac"],
    expect: true,
    test: function(s, t) {
    }
  },

  {
    goal: "Given strings s and t, return true if s includes t (case insensitive)",
    args: ["Cormac", "MAC"],
    expect: true,
    test: function(s, t) {
    }
  },

  {
    goal: "Given strings s and t, return the concatenation of s and t",
    args: ["foo", "bar"],
    expect: "foobar",
    test: function(s, t) {
    }
  }

];

test(exercises);
