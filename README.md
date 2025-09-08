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
