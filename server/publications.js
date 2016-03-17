/**
 * Created by Max TOMPOUCE on 17/03/2016.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});