// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.on('add', function() {
    //   if( this.models.length === 1 ) {
    //   	this.playFirst()
    //   }
    // }, this);
    // this.on('ended', function() {
    // 	this.shift();
    // 	if( this.length) {
	   //    this.playFirst();
    // 	}
    // }, this);
    // this.on('dequeue', function() {
    // 	this.remove(song);
    // }, this);
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.next, this);
  },

  enqueue: function(song) {
    if( this.models.length === 1 ) {
      this.playFirst()
    } else {
      return;
    }
  },

  dequeue: function(song) {
    if (this.first() === song) {
      this.next();
    } else {
      this.remove(song);
    }
  },

  next: function() {
    this.shift();
    if (this.length) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },
  
  playFirst: function() {
    this.first().play();
  }
});
