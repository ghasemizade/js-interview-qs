# js-interview-qs

###### 1. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

- A: 0 1 2
- B: 3 3 3
- C: 0 1 2 (after 1 second delay)
- D: undefined undefined undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Because `var` is function-scoped (not block-scoped), the same `i` is shared across all iterations of the loop.
By the time the `setTimeout` callback executes after 1 second, the loop has already finished and `i` is `3`.
Therefore, each `console.log` prints `3`.

If we used `let` instead of `var`, it would print `0 1 2` because `let` is block-scoped, creating a new `i` for each iteration.

</p>
</details>

---

###### 2. What's the output?

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

- A: 0 1 2
- B: 3 3 3
- C: 0 1 2 (after 1 second delay)
- D: undefined undefined undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`let` is block-scoped, meaning each iteration of the loop creates a new binding for `i`.
When the `setTimeout` callback runs after 1 second, it "remembers" the value of `i` at the time of that iteration.

</p>
</details>

---

###### 3. What's the output?

```javascript
const obj = {
  name: "John",
  sayHi: function () {
    setTimeout(function () {
      console.log(`Hi ${this.name}`);
    }, 1000);
  },
};

obj.sayHi();
```

- A: Hi John
- B: Hi undefined
- C: Hi
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Inside the `setTimeout` callback, `this` does not refer to `obj`.
Instead, in non–strict mode, `this` defaults to the global object (`window` in browsers, `global` in Node.js).
Since the global object does not have a `name` property, `this.name` evaluates to `undefined`.

</p>
</details>

---

###### 4. What's the output?

```javascript
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});
```

- A:

  ""  
  [object Object]  
  [object Object]  
  NaN

- B:

  ""  
  {}  
  {}  
  {}

- C:

  []  
  {}  
  {}  
  {}

- D: Throws an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

1.  `[] + []`
    Both arrays are converted to strings (""), so result is an empty string.

2.  `[] + {}`
    [] → ""
    {} → "[object Object]"
    Concatenation gives "[object Object]".

3.  `{} + []`
    This is tricky!

        * If a line starts with `{}`, JavaScript interprets it as a block statement, not an object literal.

So effectively it’s +[], which becomes 0.

Then "[object Object]" from [] results in "0[object Object]" in some contexts, but in most modern engines it evaluates as "[object Object]".

Hence the logged output is "[object Object]".

{} + {}
Again, the first {} is treated as a block.
So it becomes +{}, which tries to convert an object to a number → results in NaN.

</p>
</details>

---

###### 5. What's the output?

```javascript
let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);
```

- A: 1function
- B: 1undefined
- C: 1object
- D: Throws an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Named function expressions (`function f() {}`) create a binding for the name only inside the function itself, not outside.

</p>
</details>

---

###### 6. What's the output?

```javascript
console.log([] == ![]);
```

- A: false
- B: true
- C: TypeError
- D: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Step by Step:

1. `![] == false`
   because `[]` is truthy, so negating it gives `false`
2. Now the comparison is `[] == false`
3. When using `==` (loose equality), JavaScript does type coercion:

   - `false` -> `0`(boolean to number)
   - `[]` -> `""`(to primitive -> string) -> then`""`->`0`(string to number)

4. So the comparison becomes: `0 == 0` -> true

</p>
</details>

---

###### 7. What's the output?

```javascript
console.log([] == []);
```

- A: false
- B: true
- C: TypeError
- D: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

In JavaScript, arrays are objects, and when you compare objects with `==` or `===`, you’re comparing their references in memory, not their contents.

`[]` creates a new array instance every time.

So `[] == []` compares two different objects in memory → result is false.

</p>
</details>

---

###### 8. What's the output?

```javascript
let x = 0;

console.log(x++);
console.log(++x);
```

- A: 0 1
- B: 1 2
- C: 0 2
- D: throw an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`x++` -> return then increment
`++x` -> increment then return

</p>
</details>

---

###### 9. What's the output?

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- A: true true
- B: true false
- C: false true
- D: throw an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`1 < 2 < 3`

`1 < 2 → true`

Now: `true < 3`

In numeric comparison, true is coerced to 1 → 1 < 3 → true

✅ Output: `true`

`3 > 2 > 1`

`3 > 2 → true`

Now: `true > 1`

true coerces to 1 → 1 > 1 → false

✅ Output: `false`

</p>
</details>

---

###### 10. What's the output?

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: 123
- B: 456
- C: b
- D: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

When using objects as keys in a plain JavaScript object (`{}`), the keys are implicitly converted to strings.

`a[b] = 123;`

Here `b` is an object `{ key: 'b' }`.

When used as a property key, it’s converted via `.toString()` → `"[object Object]"`.

So this actually sets:

```javascript
a["[object Object]"] = 123;
```

`a[c] = 456;`

Same process: `c` → `"[object Object]"`.

This overwrites the previous value.

So `a[b]` is effectively `a["[object Object]"]`, which equals `456`.

</p>
</details>

---

###### 11. What's the output?

```javascript
let obj = {
  a: 10,
  b: () => console.log(this.a),
};

obj.b();
```

- A: 10
- B: null
- C: throws an error
- D: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Arrow functions don’t have their own `this`.
Instead, they lexically inherit `this` from their surrounding scope.

`b` is defined as an arrow function inside `obj`.

But the surrounding scope is not `obj`, it’s the global scope (or `undefined` in strict mode).

So `this.a` looks for `a` in the global object, not in `obj`.

Since no `a` exists globally, the result is `undefined`.

</p>
</details>

---

###### 12. What's the output?

```javascript
console.log("5" + 1);
console.log("5" - 1);
```

- A: 6, 4
- B: 51, NaN
- C: "51", 4
- D: Throws an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`"5" + 1`

The `+` operator does string concatenation when one operand is a string.

`"5" + 1` → `"51"`

`"5" - 1`

The `-` operator only works with numbers.

`"5"` is coerced to a number (5)

`5 - 1` → `4`

</p>
</details>

---

###### 13. What's the output?

```javascript
let a = 1;
let b = a++;
console.log(a, b);
```

- A: 1 2
- B: 2 1
- C: 2 2
- D: 1 1

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`a++` is the postfix increment operator.

It returns the current value of `a`, then increments `a` afterwards.

`a++` → use current value, then increment

`++a` → increment first, then use value

</p>
</details>

---

###### 14. What's the output?

```javascript
console.log([1, 2, 3] + [4, 5, 6]);
```

- A: [1, 2, 3, 4, 5, 6]
- B: "1,2,3 4,5,6"
- C: Throws an error
- D: "1,2,34,5,6"

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

When using the + operator with arrays, JavaScript first tries to convert them to primitives.

`[1, 2, 3].toString()` → "1,2,3"

`[4, 5, 6].toString()` → "4,5,6"

`"1,2,3"` + `"4,5,6"` → `"1,2,34,5,6"`

</p>
</details>

---

###### 15. What's the output?

```javascript
function test(x = y, y = 2) {
  console.log(x, y);
}
test();
```

- A: undefined
- B: 2 2
- C: ReferenceError
- D: null 2

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Function parameters are initialized from left to right.

1. When evaluating `x = y`, JavaScript tries to use the value of `y`.

2. But `y` hasn’t been initialized yet — it’s only declared later as the second parameter with default `2`.

3. This leads to the Temporal Dead Zone (TDZ) error, similar to using a let variable before its declaration.

```javascript
ReferenceError: Cannot access 'y' before initialization
```

</p>
</details>

---

###### 16. What's the output?

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve()
  .then(() => console.log("3"))
  .then(() => console.log("4"));
console.log("5");
```

- A: 1 2 3 4 5
- B: 1 5 3 4 2
- C: 1 5 2 3 4
- D: 1 3 4 5 2

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

### Execution order in JavaScript

1.  Synchronous code first →
    `console.log('1')` → prints `1`
    `console.log('5')` → prints `5`
2.  Microtasks (Promises) next →
    `Promise.resolve().then(...)` is queued as a microtask.
    Microtasks run before macrotasks.

    - Prints `3`

    - Then chains into `.then(...)` → prints `4`

3.  Macrotasks (setTimeout) last →
    `setTimeout(..., 0)` executes after microtasks.
    - Prints `2`

</p>
</details>

---

###### 17. What's the output?

```javascript
async function test() {
  return 5;
}

test().then(console.log);
```

- A: Promise { 5 }
- B: undefined
- C: 5
- D: Throws an error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

- An `async` function always returns a Promise, even if you return a plain value.

- `return 5`; is wrapped as `Promise.resolve(5)`.

- When we call `test().then(console.log)`, the promise resolves with 5, and the then callback logs it.

</p>
</details>

---

---

###### 18. What's the output?

```javascript
Promise.resolve()
  .then(() => console.log("A"))
  .then(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));
```

- A: A B C
- B: A C B
- C: C A B
- D: B A C

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The first `Promise.resolve()` schedules `.then(() => console.log('A'))` as a microtask.

Once `A` finishes, the next `.then(() => console.log('B'))` is queued as another microtask.

⚡ Important: B can’t be queued until A has run.

The second `Promise.resolve().then(() => console.log('C'))` is also scheduled immediately as a microtask.

#### So the execution order is:

- Run A (first microtask).
- While scheduling, B is now queued.
- Next pending microtask is C.
- Finally, B runs.

</p>
</details>

---
