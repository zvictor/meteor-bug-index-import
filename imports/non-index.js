if (Meteor && Meteor.isServer) {
  module.exports = require('./content/');
} else {
  module.exports = require('./content/');
}
