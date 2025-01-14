import { Factory } from 'miragejs';
import faker from '@faker-js/faker';

const { date, lorem } = faker;

export default Factory.extend({
  date() {
    return date.past();
  },

  text() {
    return lorem.sentence();
  },
});
