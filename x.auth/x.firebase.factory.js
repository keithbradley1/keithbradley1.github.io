// angular.module("app")
//   .factory("firebaseFactory", ($timeout) => {
//     const db = firebase.database();
//     const pinsRef = db.ref("pins");
//     const boardsRef = db.ref("boards");
//     const usersRef = db.ref("users");

//     return {
//       getPin: id => db.ref(`pins/${id}`).once("value").then(snapshot => snapshot.val()),
//       listenPins: listener => pinsRef.on("value", snapshot => listener(snapshot.val())),
//       postPin: pin => $timeout().then(() => {
//         const newKeyId = pinsRef.push().key;
//         pinsRef.update({[newKeyId]:pin});
//       }),
//       deletePin: id => pinsRef.child(id).remove(),

//       getBoard: id => db.ref(`boards/${id}`).once("value").then(snapshot => snapshot.val()),
//       listenBoards: listener => boardsRef.on("value", snapshot => listener(snapshot.val())),
//       postBoard: board => $timeout().then(() => {
//         const newKeyId = boardsRef.push().key;
//         boardsRef.update({[newKeyId]:board});
//       }),
//       deleteUserBoards: id => boardsRef.child(id).remove()
//     };
//   });
