Package.describe({
  name: 'timbrandin:meteor-icon',
  summary: 'A Meteor 1.0 Icon in SVG.',
  version: '1.0.0',
  git: 'https://github.com/timbrandin/meteor-svg-icon'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('standard-app-packages');
  api.use('templating');

  api.addFiles('timbrandin:meteor-icon.html', 'client');
});
