import { ACTIVE_EFFECT } from "./effect";

export function track(target: Object, key: string | symbol) {
  console.log(ACTIVE_EFFECT, target, key);
}
