Method exposition
=================

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework.
It allows of any Model to validate the complexity of a field. 
It can help to define the methods exposed each by each.

Install
-------

```bash
  npm install --save loopback-mixin-method-exposition
```

Model configuration
-------------------

Add the `mixins` property to your `server/model-config.json`:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../common/mixins",
      "../node_modules/loopback-mixin-method-exposition"
    ]
  }
}
```

Configure
----------

To use with your Models add the `mixins` attribute to the definition object of your model config.

```js
    "MethodExposition": {
      "expose": [
        "create",
        "find",
        "deleteById"
      ]
    }
```


Debug
-----

To display all the endpoints disabled by model, you can run your server with this env variable

```bash
DEBUG=loopback:mixin:method-exposition npm start
```


