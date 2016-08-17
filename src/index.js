import { deprecate } from 'util';
import MethodExposition from './MethodExposition';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('MethodExposition', MethodExposition),
  'DEPRECATED: Use mixinSources, see https://github.com/oktapodia/loopback-mixin-method-exposition#mixinsources'
);
