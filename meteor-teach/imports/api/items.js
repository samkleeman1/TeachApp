import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Items = new Mongo.Collection('items');

Meteor.methods({
  'Items.addOne': ({ name, surname, age }) => {
    return Items.insert({ name, surname, age });
  },
});

// ADD THIS
Meteor.publish('items', () => {
  return Items.find();
});

export default Items;