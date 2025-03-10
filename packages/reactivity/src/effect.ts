export let ACTIVE_EFFECT;

class ReactiveEffect {
  active = true;
  prevEffect = undefined;
  constructor(public fn: Function) {}
  run() {
    if (!this.active) {
      return this.fn();
    }
    try {
      this.prevEffect = ACTIVE_EFFECT;
      ACTIVE_EFFECT = this;
      return this.fn();
    } finally {
      ACTIVE_EFFECT = this.prevEffect;
    }
  }
}

function effect(fn: Function) {
  const _effect = new ReactiveEffect(fn);
  _effect.run();
}

export { effect };
