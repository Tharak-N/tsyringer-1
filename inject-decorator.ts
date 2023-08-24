import { injectable, inject } from 'tsyringe';
import { EmployeeDetails } from './full-name';

@injectable()
export class InjectDecorator {
  userName;
  constructor(@inject('EMPLOYEE') public employeeName: EmployeeDetails) {
    console.log('full name in Inject Decorator is', employeeName);
    this.userName = employeeName;
  }
}
