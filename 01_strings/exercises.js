import {test} from "../lib/test.js";

let exercises = [
  {
    goal: "Given a string s, return a copy of the string converted to uppercase",
    args: ["abacadabra"],
    expect: "ABACADABRA",
    test: s => {}
  },

  {
    goal: "Given a string s, return a copy of the string converted to lowercase",
    args: ["ABACADABRA"],
    expect: "abacadabra",
    test: s => {}
  },

  {
    goal: "Given a string s, return the first character of s",
    args: ["Hello"],
    expect: "H",
    test: s => {}
  },

  {
    goal: "Given a string s, return the last character of s",
    args: ["Hello"],
    expect: "o",
    test: s => {}
  },

  {
    goal: "Given a string s, return the middle character of s",
    args: ["Hello"],
    expect: "l",
    test: s => {}
  },

  {
    goal: "Given a string s, return the middle character of s",
    hint: "Take the length of s, divide by 2, and use that as the index",
    args: ["javascript"],
    expect: "c",
    test: s => {}
  },

  {
    goal: "Given a string s and a character ch, return the index of ch in s",
    args: ["Cormac", "m"],
    expect: 3,
    test: (s, ch) => {}
  },

  {
    goal: "Given a string s and a number start, return a substring of s from start to the end",
    args: ["Cormac", 3],
    expect: "mac",
    test: (s, start) => {}
  },

  {
    goal: "Given a string s, return a new string starting from the beginning of s up to the index (exclusive)",
    args: ["Cormac", 3],
    expect: "Cor",
    test: s => {}
  },

  {
    goal: "Given a string s, return a new string without the first and last characters of s",
    args: ["Cormac"],
    expect: "orma",
    test: s => {}
  },

  {
    goal: "Given a string s, split s into an array of strings using 'a' as the delimiter",
    args: ["banana"],
    expect: ["b", "n", "n", ""],
    test: s => {}
  },

  {
    goal: "Given a string s and an index, return the character at the index",
    args: ["banana", -1],
    expect: "a",
    test: s => {}
  }

];

test(exercises);
