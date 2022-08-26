import {test} from "../lib/test.js";

let exercises = [

  {
    goal: "Given a string s, split s into an array of strings using 'a' as the delimiter",
    args: ["banana"],
    expect: ["b", "n", "n", ""],
    test: s => s.split("a")
  },

  {
    goal: "Given a string s and an index, return the character at the index",
    args: ["banana", -1],
    expect: "a",
    test: (s, index) => s.at(index)
  }

];

test(exercises);
