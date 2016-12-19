(function() {

//Firebase init//
    var config = {
        apiKey: "AIzaSyDokZtbQm6sNd-o6ecpLl9CBIdIj2gUzUQ",
        authDomain: "autotwit-65fdb.firebaseapp.com",
        databaseURL: "https://autotwit-65fdb.firebaseio.com",
        storageBucket: "autotwit-65fdb.appspot.com",
        messagingSenderId: "434421093578"
    };
  firebase.initializeApp(config);

//Sync database in real time//
    angular
        .module('app', ['firebase'])
        .controller('MyCtrl', function($firebaseObject) {
            const rootRef = firebase.database().ref().child('angular');
            const ref = rootRef.child('object');
            this.object = $firebaseObject(ref);
        });

}());