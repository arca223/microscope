/**
 * Created by Max Le Coq on 16/03/2016.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});