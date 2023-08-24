import { AutoInjectable } from './auto-injectable';

export class AutoInjectableTester {
  constructor() {}

  getAutoInjectInstance() {
    let instance = new AutoInjectable();
    console.log(instance);
  }
}
