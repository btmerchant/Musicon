MusApp.controller('PlayerCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
  function($scope, $location, Auth, $firebaseArray) {
    console.log('PlayerCtrl');
    var ref = new Firebase('https://musicon.firebaseio.com');
    var playersRef = new Firebase('https://musicon.firebaseio.com/players');
    var songsRef = new Firebase('https://musicon.firebaseio.com/songs');
    var player = $firebaseArray(playersRef);
    var songs = $firebaseArray(songsRef);
    this.user = Auth.$getAuth().uid;
    console.log("user", this.user);
    this.players = $firebaseArray(playersRef);
    this.songs = $firebaseArray(songsRef);
    console.log("players array", this.players);
    console.log("song", this.songs);
    this.currentList = "A";

    //  songs.$loaded(function () {
    //   this.song = songs.$getRecord(this.user);
    //   console.log('songs', songs);
    // });

    this.addSong = function() {
      console.log("addSong Function");
      console.log("currentList = ", this.currentList);
      if (!this.newSong.artist) {
        this.newSong.artist = null;
      }
      if (!this.newSong.composer) {
        this.newSong.composer = null;
      }
      if (!this.newSong.key) {
        this.newSong.key = null;
      }
      if (!this.newSong.leadVoc) {
        this.newSong.leadVoc = null;
      }
      if (!this.newSong.tempo) {
        this.newSong.tempo = null;
      }
      if (!this.newSong.status) {
        this.newSong.status = null;
      }
      if (!this.newSong.list) {
        this.newSong.list = "A";
      }
      songs.$add({
        uid: this.user,
        title: this.newSong.title,
        artist: this.newSong.artist,
        composer: this.newSong.composer,
        key: this.newSong.key,
        leadVoc: this.newSong.leadVoc,
        tempo: this.newSong.tempo,
        status: this.newSong.status,
        list: this.newSong.list
      });
      console.log('Added Song');
    };

    this.editSong = function(id) {
      console.log("editSong Function");
      if (!this.newSong.artist) {
        this.newSong.artist = null;
      }
      if (!this.newSong.composer) {
        this.newSong.composer = null;
      }
      if (!this.newSong.key) {
        this.newSong.key = null;
      }
      if (!this.newSong.leadVoc) {
        this.newSong.leadVoc = null;
      }
      if (!this.newSong.tempo) {
        this.newSong.tempo = null;
      }
      if (!this.newSong.status) {
        this.newSong.status = null;
      }
      if (!this.newSong.list) {
        this.newSong.list = "A";
      }
      songs.$add({
        uid: this.user,
        title: this.newSong.title,
        artist: this.newSong.artist,
        composer: this.newSong.composer,
        key: this.newSong.key,
        leadVoc: this.newSong.leadVoc,
        tempo: this.newSong.tempo,
        status: this.newSong.status,
        list: this.newSong.list
      });
      console.log('Added Song');
    };

     this.deleteSong = function(id) {
      console.log(id);
      var songRef = new Firebase('https://musicon.firebaseio.com/songs' + '/' + id);
      console.log("songRef", songRef);
      console.log("deleteSong function");
 
      songRef.remove();
      console.log("delete function run");
    };

  }]);
