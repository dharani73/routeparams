import Route from '@ember/routing/route';

// const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Cereals'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/stores.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { id, attributes } = model;
      let type;

      // if (GROCERY_CATEGORIES.includes(attributes.category)) {
      //   type = 'Grocery';
      // } else {
      //   type = 'All';
      // }

      return { id, type, ...attributes };
    });
  }
}
