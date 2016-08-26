import { deprecate } from 'util';
import Exposition from './Exposition';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('Exposition', Exposition),
  'DEPRECATED: Use mixinSources, see https://github.com/oktapodia/loopback-mixin-exposition#mixinsources'
);
