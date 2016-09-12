angular.module("myApp")
  .factory("AuthFactory", () => {
    return {
      user: () =>
        firebase.auth().currentUser.uid,
      login: (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password),
      // logout: () =>
      //   firebase.auth().signOut(),
      logout (email, password) {
        firebase.auth().signOut().catch(function(error) {
          // Handle Errors here.
          console.log("Error via logout function", error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      },
      register: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
    };
  });
