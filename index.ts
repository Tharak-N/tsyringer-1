import { Container } from './container';
let container = new Container();

import { InjectableDecorator } from './injectable-decorator';
/**Registering and resolving a Injectable Decorator
 * @param TOKEN - Class Constructor Token
 * @param PROVIDER - Class
 */
container
  .register(InjectableDecorator, { useClass: InjectableDecorator })
  .resolve(InjectableDecorator)
  .logResolvedInstance();

import { employeeName } from './full-name';
/**Registering a Object
 * @param TOKEN - EMPLOYEE string
 * @param PROVIDER - we can register either string / object with this useValue
 */
// container.register('EMPLOYEE', { useValue: employeeName });
// .resolve('EMPLOYEE')
// .logResolvedInstance();

import { InjectDecorator } from './inject-decorator';
/**Registering and resolving a Inject Decorator
 * @param TOKEN - INJECT_DECORATOR string
 * @param PROVIDER - class
 */
// container
//   .register('INJECT_DECORATOR', { useClass: InjectDecorator })
//   .resolve('INJECT_DECORATOR')
//   .logResolvedInstance();

import { AutoInjectable } from './auto-injectable';
import { DependencyContainer } from 'tsyringe';
container.register('FACT', {
  useFactory: (dependency: DependencyContainer) => {
    console.log('dep', dependency);
    let isRegistered = dependency.isRegistered('EMPLOYEE');
    console.log('is registered', isRegistered);
    if (isRegistered) {
      console.log('inside if');
      container.resolve('EMPLOYEE').logResolvedInstance();
    } else {
      console.log('inside else');
      dependency.register('EMPLOYEE', { useValue: employeeName });
      // container.resolve('EMPLOYEE').logResolvedInstance()
    }
  },
});

container.resolve('FACT');
console.log('after FACT resolving');
container.resolve('EMPLOYEE').logResolvedInstance();

// let autoInjectTester = new AutoInjectableTester().getAutoInjectInstance()
