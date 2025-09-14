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
