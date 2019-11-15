import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  items: computed(function() {
    return new Array(15).fill().map((_, index) => EmberObject.create({ id: index + 1 }));
  })
});
