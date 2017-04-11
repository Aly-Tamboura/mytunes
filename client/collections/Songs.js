// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs', 
  parse: function(r) {
  	return r.results;
  }, 

  initialize: function() {
  	this.fetch({data:{limit:10}})
  }
});
