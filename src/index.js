import { deprecate } from 'util';
import methodExposition from './methodExposition';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('MethodExposition', methodExposition),
  'DEPRECATED: Use mixinSources, see https://github.com/oktapodia/loopback-mixin-method-exposition#mixinsources'
);
