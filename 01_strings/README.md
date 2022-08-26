# Strings

A string in JavaScript is an ordered sequence of characters.
You use strings to store and represent text.

Strings literals are created using quotes.

```js
// Using double quotes:
let cats = "cats";

// or single quotes:
let dogs = 'dogs';
```

They can be concatenated:

```js
let weather = "It's raining " + cats + " and " + dogs + "!";
// It's raining cats and dogs!
```

Or created using templates (note the backticks):

```js
let weather = `It's raining ${cats} and ${dogs}!`;
// It's raining cats and dogs!
```

More string samples:

```js
// an empty string
""

// a string with whitespace (a single space)
" "

// a string with whitespace
// (a space, a newline, a tab)
" \n\t"

// a string of letters
"hello"

// a string of digits
"123"

// letters, digits, and punctuation
"Happy 26th Birthday!"
```

> Note: There are other whitespace characters that can appear in a string, but
the common ones (space, newline, tab) are shown above. See
[here](https://developer.mozilla.org/en-US/docs/Glossary/Whitespace#in_javascript)
for more information.

## Character access and iteration

Individual characters can be accessed using bracket notation.

```js
let s = "Hello";

s[0]
// H

s[1]
// e
```

Unlike arrays, however, this notation can't be used to replace values. Strings
are immutable.

Strings can iterated over and invidual characters can be accessed using bracket
notation.

```js
let pet = "dog";
for (let i = 0; i < pet.length; i++) {
  console.log(c[i]);
}
// d
// o
// g
```

Strings can also be iterated over using a for..of loop.

```js
let pet = "dog";
for (ch of pet) {
  console.log(ch);
}
// d
// o
// g
```

## length property

A string has a readonly `length` property.

Examples:

```js
"".length
0

" ".length
1

" \n\t".length
3

"hello".length
5

"123".length
3

"Happy 26th Birthday!"
20
```

## Methods

Strings are **immutable**. A string cannot be modified and any
attempt to do so will not succeed.

There are a number of very useful methods available on strings
that provide information about or copies of strings sliced or
transformed in some way.

The following is a list of methods that **should be committed to
memory**. However, this is not an exhaustive list, so make sure to familiarize
yourself with all of the string methods documented [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

### Case conversions

- [`.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [`.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

### Accessing a character by index (offset)

- [`.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
- `.charAt()` - don't use, use `at()` instead
- [`.charCodeAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

### Getting the index (offset) of a character

- [`.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [`.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

### Extracting parts of a string

- [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- `.substring()`
  Note: `slice` and `substring` are almost identical, but
  `slice` lets you use negative indices, where as `substring`
  converts any negative number to zero, and then reorders
  the start and end indices (if necessary) so that the
  start index is less than the end index. Many programmers
  find `slice` behavior more intuitive than `substring`
  behavior, so at least initially, just focus on `slice`.

- [`.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  Note: The complementary array join() method can be used to create a string
  from array elements. These are often used together.

### Trimming strings

- [`.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
- [`.trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
- [`.trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

### Padding strings

- [`.padStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [`.padEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

### Basic searching and matching

- [`.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [`.startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [`.endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

### Pattern-based searching, matching, and replacing

Patterns are specified using regular expressions.

Regular expressions use a compact notaton to indicate common search patterns
that generally can't be performed easily or effectively (if at all) using the
other string methods, and would otherwise require custom coding.

While it takes practice to become adept at writing sophisticated regular
expressions, simple regular expressions are fairly easy to learn and are well
worth the effort for time saved writing and debugging code.

- [`.search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
- [`.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match),
[`.matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
- [`.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace),
[`.replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

### Miscellaneous

- [`.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
- [`.repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## The unannotated list of methods to memorize

- [`.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase),
[`.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

- [`.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at),
[`.charCodeAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

- [`.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf),
[`.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

- [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice),
[`.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

- [`.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim),
[`.trimStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart),
[`.trimEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

- [`.padStart()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart),
[`.padEnd()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

- [`.search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search),
[`.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match),
[`.matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll),
[`.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace),
[`.replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)


- [`.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat),
[`.repeat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## Essential reading

For important detail and depth, read:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
