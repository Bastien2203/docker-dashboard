import { module, test } from 'qunit';
import { setupTest } from 'web/tests/helpers';

module('Unit | Service | container', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:container');
    assert.ok(service);
  });
});
