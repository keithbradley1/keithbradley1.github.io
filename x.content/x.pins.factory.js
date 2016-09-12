// angular.module("app")
//   .factory("pinFactory", (firebaseFactory, authFactory) => {
//     let currentBoardId = null;

//     return {
//       setBoardId: boardId => currentBoardId = boardId,
//       listenPins: listener => firebaseFactory.listenPins(pins => {
//         for(const pid in pins) {
//           if(pins[pid].boardid !== currentBoardId) {
//             delete pins[pid];
//           }
//         }
//         listener(pins);
//       }),
//       createPin: (newPin) =>
//         firebaseFactory.postPin(Object.assign(newPin, {uid:authFactory.user(), boardid:currentBoardId})),

//       deletePin: id => firebaseFactory.deletePin(id),
//       updatePin: (id, data) => db.ref(`pins/${id}`).update(data)
//     };
//   });
