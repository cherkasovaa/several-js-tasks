# Several JS Tasks

## Task

The task is to implement functions on different Core JS topics. There are eight modules with different tasks. Each module consists of tasks for specified topic:

1. Strings
2. Numbers
3. Arrays
4. Date
5. Objects
6. Promises
7. Conditions and Loops
8. Functions and Closures

## Prepare and test

1. Install Node.js
2. Fork this repository: https://github.com/cherkasovaa/several-js-tasks
3. Go to folder `several-js-tasks`
4. To install all dependencies use `npm install`
5. Each task is usually a regular function:
   ```javascript
   /**
    * Returns the result of concatenation of two strings.
    *
    * @param {string} value1
    * @param {string} value2
    * @return {string}
    *
    * @example
    *   'aa', 'bb' => 'aabb'
    *   'aa',''    => 'aa'
    *   '',  'bb'  => 'bb'
    */
   function concatenateStrings(value1, value2) {
     throw new Error('Not implemented');
   }
   ```
   Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.
6. Write your code in `src/**/*.js`.

   Remove the throwing error line from function body:

   ```javascript
   throw new Error('Not implemented');
   ```

   Implement the function by any way and verify your solution by running tests until the failed test become passed (green).

7. Run `npm test` in command line. If everything is OK you can try to resolve the next task.

## FAQ

The task based on https://github.com/rolling-scopes-school/js-assignments.
