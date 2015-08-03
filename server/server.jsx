Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: "twitter"
  });
  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: Meteor.settings.public.twitter.consumerKey,
    loginStyle: "popup",
    secret: Meteor.settings.twitter.consumerSecret
  });
})
