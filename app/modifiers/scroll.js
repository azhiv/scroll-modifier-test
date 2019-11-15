import { modifier } from 'ember-modifier';

export default modifier(function scroll(element, params, { scrollLeft }) {
  if (scrollLeft !== undefined) {
    element.scrollLeft = scrollLeft;
  }
});
