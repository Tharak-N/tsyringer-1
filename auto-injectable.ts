import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class AutoInjectable {
  public name;
  constructor() {
    console.log('inside the auto injectable');
    this.name = 'Auto Inject';
  }
}
