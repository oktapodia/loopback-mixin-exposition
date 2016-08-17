import chai from 'chai';
import ModelDefinition from 'loopback-datasource-juggler/lib/model-definition';
import MethodExposition from '../src/MethodExposition';

describe('Method exposition mixin', function () {
  it('should be a function.', function (done) {
    chai.assert.isFunction(MethodExposition);
    done();
  });
  it('Method exposition work without parameters.', function (done) {
    MethodExposition(ModelDefinition, {});
    done();
  });
});
