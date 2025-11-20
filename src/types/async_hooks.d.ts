declare module 'async_hooks' {
  export class AsyncLocalStorage<T = any> {
    getStore(): T | undefined;
    run<R>(store: T, cb: (...args: any[]) => R): R;
  }
}
