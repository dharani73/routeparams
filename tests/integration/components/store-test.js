import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | store', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.setupRouter();
  });

  test('it renders information about a groceries', async function (assert) {
    this.setProperties({
      store: {
        id: 1,
        title: 'Fresh Vegetables',
        homedelivery: 'Available',
        city: 'hyderabad',
        rating: '5 star',
        stock: 'Available',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Vegetables',
        image:
          'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
        description:
          'These are organic vegetables also fresh and easy to buy now from our app.',
      },
    });

    await render(hbs`<Store @store={{this.store}} />`);

    assert.dom('article').hasClass('store');
    assert.dom('article h3').hasText('Fresh Vegetables');
    assert.dom('article h3 a').hasAttribute('href', '/stores/1');
    assert.dom('article .homedelivery').includesText('Available');
    assert.dom('article .location').includesText('hyderabad');
    assert.dom('article .Rating').includesText('5 star');
    assert.dom('article .stock').includesText('Available');
    assert.dom('article .image').exists();
  });
});
