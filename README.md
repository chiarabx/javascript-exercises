<div align="center">
  <a href="https://github.com/appalaszynski/javascript-exercises">
    <img src="https://user-images.githubusercontent.com/35331661/42527869-27757618-847a-11e8-92f0-ab671ea0d200.png" height="125px">
  </a>
  <h1>JavaScript Exercises</h1>
  <p>
    <em>Collection of JavaScript Exercises and Coding Challenges</em>
  </p>
  <p>
    <a href="https://github.com/appalaszynski/javascript-exercises/stargazers">
      <img src="https://img.shields.io/github/stars/appalaszynski/javascript-exercises.svg" alt="Stars" /> 
    </a>
    <a href="https://github.com/appalaszynski/javascript-exercises/commits/master">
      <img src="https://img.shields.io/github/last-commit/appalaszynski/javascript-exercises.svg" alt="Last Commit" />
    </a>
  </p>
  <br>
</div>

Series of interesting JavaScript exercises that I solved during my education. For each exercise I've tried to include several possible solutions. Thanks to [Jest](https://jestjs.io/) test framework you can easily check the correctness of your solution.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Exercises](#exercises)
- [Contributing](#contributing)

---

## Installation

Clone the repo and install local dependencies.

```bash
$ git clone https://github.com/colthreepv/javascript-exercises.git
$ npm install
```

Install Karma globally.

```bash
$ npm install -g karma-cli
```

---

## Usage

Each exercise directory contains `index.js` file with exercise contents and `test.js` file with tests validating solution correctness.

### Running All Tests

```bash
$ jest
```

### Running Tests for Specific Exercise

To run test for specific exercise simply add its directory path to `jest` command, e.g.

```bash
$ jest exercises/ReverseString
```

You can also run Jest in watch mode by adding `--watch` flag.

---

## Exercises

- [Reverse String](exercises/ReverseString/index.js)
- [Palindrome](exercises/Palindrome/index.js)
- [Reverse Integer](exercises/ReverseInteger/index.js)
- [Longest Word](exercises/LongestWord/index.js)
- [Is Even](exercises/IsEven/index.js)
- [Max Char](exercises/MaxChar/index.js)
- [Anagrams](exercises/Anagrams/index.js)
- [FizzBuzz](exercises/FizzBuzz/index.js)
- [Array Chunk](exercises/ArrayChunk/index.js)
- [Capitalize](exercises/Capitalize/index.js)
- [Fib](exercises/Fib/index.js)
- [Matrix Spiral](exercises/MatrixSpiral/index.js)
- [Max Char](exercises/MaxChar/index.js)
- [Pyramid](exercises/Pyramid/index.js)
- [Queue](exercises/Queue/index.js)
- [Stack](exercises/Stack/index.js)
- [Queue from Stacks](exercises/QueueFromStacks/index.js)
- [Steps](exercises/Steps/index.js)
- [Vowels](exercises/Vowels/index.js)
- [Weave](exercises/Weave/index.js)

---

## Contributing

All contributions and suggestions are welcome! For suggested improvements, please create an [issue](https://github.com/appalaszynski/javascript-exercises/issues). For direct contributions, please [fork](https://github.com/appalaszynski/javascript-exercises/fork) the repository, create your feature branch, commit your changes, push commits to the branch and create a new [pull request](https://github.com/appalaszynski/javascript-exercises/pulls).
