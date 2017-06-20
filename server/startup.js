import { A } from '/imports';
import * as index from '/imports/';
import * as nonIndex from '/imports/non-index';

Meteor.startup(() => {
  console.log({ A });
  console.log({ index });
  console.log({ nonIndex });
});
