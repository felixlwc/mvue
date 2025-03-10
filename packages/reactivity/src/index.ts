import { reactive } from "./reactive";
import { effect } from "./effect";

const obj = reactive({
  foo: 1,
  bar: 2,
});

effect(() => {
  console.log(obj.foo);
  effect(() => {
    console.log(obj.bar);
  });
  console.log(obj.bar);
});
