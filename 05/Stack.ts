export default class Stack {
  s: string[] = [];

  constructor(stack: string) {
    if (!stack) return;

    this.s = stack.split('');
  }

  static get default() {
    return new Stack('');
  }

  prepend(value: string) {
    if (value == '_') return;

    this.s = [value, ...this.s];
  }

  pop() {
    return this.s.pop();
  }

  popN(n: number) {
    return this.s.splice(this.s.length - n);
  }

  push(value: string) {
    this.s.push(value);
  }

  pushN(values: string[]) {
    this.s = [...this.s, ...values];
  }

  top() {
    return this.s[this.s.length - 1];
  }
}
