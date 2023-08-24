import { injectable } from 'tsyringe';

@injectable()
export class InjectableDecorator {
  private firstName: string = 'Nadendla';
  private lastName: string = 'Tharak';

  getFullName() {
    return this.firstName + '' + this.lastName;
  }
}
