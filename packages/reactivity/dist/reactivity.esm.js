// packages/shared/src/index.ts
var isObject = (value) => {
  return typeof value === "object" && value !== null;
};

// packages/reactivity/src/index.ts
console.log("reactivity test", isObject({}));
//# sourceMappingURL=reactivity.esm.js.map
