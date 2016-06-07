import Model from 'ember-data/model';

const {
	attr
} = Ember;
export default Model.extend({
  content: attr('string')
});
