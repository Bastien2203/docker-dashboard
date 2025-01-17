import { module, test } from 'qunit';
import { setupTest } from 'web/tests/helpers';

module('Unit | Route | containers', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:containers');
    assert.ok(route);
  });
});
