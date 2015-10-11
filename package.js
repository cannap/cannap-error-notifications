Package.describe({
  name: 'cannap:error-notification',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly:true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('ecmascript');
  api.addAssets('img/meteor.png','client');
  api.addFiles('vendor/notify.js','client');
  api.addFiles('error-notification.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cannap:error-notification');
  api.addFiles('error-notification-tests.js');
});
