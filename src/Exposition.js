// @flow

import ModelDefinition from 'loopback-datasource-juggler/lib/model-definition';
import debugModule from 'debug';
const debug = debugModule('loopback:mixin:exposition');

export default function (Model: ModelDefinition, options: {}) {
  if (Model && Model.sharedClass) {
    if (options.methods) {
      const methodsToExpose = options.methods.expose || [];
      const methods = Model.sharedClass.methods();

      methods.forEach((method: Function) => {
        const methodName = method.name;

        if (methodsToExpose.indexOf(methodName) < 0) {
          Model.disableRemoteMethod(methodName, method.isStatic);
          debug('%s.%s disabled', Model.modelName, methodName);
        }
      });
    }

    if (options.properties) {
      const propertiesToHide = options.properties.hide || [];
      const settings = Model.definition && Model.definition.settings;

      propertiesToHide.forEach((propertyName: string) => {
        if (settings.hidden.indexOf(propertyName) > 0) {
          debug('property %s already hidden', propertyName);

          return;
        }

        settings.hidden.push(propertyName);
        debug('%s.%s hidden', propertyName);
      });
    }
  }
}
