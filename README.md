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
