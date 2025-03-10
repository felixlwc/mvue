import { isObject } from "@vue/shared";

const reactiveMap = new WeakMap<Object, ProxyConstructor>();

enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}

const mutations: ProxyHandler<any> = {
  get(target, key, receiver) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver);
  },
};

function reactive(target: Object) {
  return createReactiveObject(target);
}

function createReactiveObject(target: Object) {
  if (!isObject(target)) {
    return target;
  }

  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }

  if (reactiveMap.has(target)) {
    return reactiveMap.get(target);
  }
  const proxy = new Proxy(target, mutations);
  reactiveMap.set(target, proxy);
  return proxy;
}
