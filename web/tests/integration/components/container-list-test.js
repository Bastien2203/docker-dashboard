import { module, test } from 'qunit';
import { setupRenderingTest } from 'web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | container-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContainerList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ContainerList>
        template block text
      </ContainerList>
    `);

    assert.dom().hasText('template block text');
  });
});
