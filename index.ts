import { Container } from './container';

import { InjectableDecorator } from './injectable-decorator';
import { InjectDecorator } from './inject-decorator';
import { employeeName } from './full-name';

let container = new Container();

/**Registering and resolving a Injectable Decorator
 * @param TOKEN - Class Constructor Token
 * @param PROVIDER - Class
 */
container
  .register(InjectableDecorator, { useClass: InjectableDecorator })
  .resolve(InjectableDecorator)
  .logResolvedInstance();

/**Registering a Object
 * @param TOKEN - EMPLOYEE string
 * @param PROVIDER - we can register either string / object with this useValue
 */
container.register('EMPLOYEE', { useValue: employeeName });
// .resolve('EMPLOYEE')
// .logResolvedInstance();

/**Registering and resolving a Inject Decorator
 * @param TOKEN - INJECT_DECORATOR string
 * @param PROVIDER - class
 */
container
  .register('INJECT_DECORATOR', { useClass: InjectDecorator })
  .resolve('INJECT_DECORATOR')
  .logResolvedInstance();
