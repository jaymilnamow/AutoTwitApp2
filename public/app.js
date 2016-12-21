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

    // Get elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('tweetList');

    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('tweet');

    //Sync object changes
    dbRefObject.on('value', snap => {
      preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    //Sync list changes
    dbRefList.on('child_added', snap => {

        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);

    });

    //Update list when changed
    dbRefList.on('child_changed', snap => {

        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val();

    });

    //Update list when removed
    dbRefList.on('child_removed', snap => {

        const liRemove = document.getElementById(snap.key);
        liRemove.remove();

    });


    object
        .module('app', ['firebase'])
        .controller('MyCtrl', function($firebaseObject) {
            const rootRef = firebase.database().ref().child('object');
            const ref = rootRef.child('tweetList');
            this.object = $firebaseObject(ref);
        });

}());