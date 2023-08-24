import 'reflect-metadata';
import { container } from 'tsyringe';

export class Container {
  instance;

  constructor() {}

  resolve(token: any) {
    this.instance = container.resolve(token);
    return this;
  }

  logResolvedInstance() {
    console.log(this.instance);
  }

  register(token: any, provider: any) {
    this.instance = container.register(token, provider);
    return this;
  }
}
