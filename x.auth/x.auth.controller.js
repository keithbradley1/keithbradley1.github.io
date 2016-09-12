// angular.module("app")
//   .controller("loginCtrl", function(authFactory, boardsFactory, $location, $timeout) {
//     const auth = this;
//     auth.actionLabel = "Log In";

//     auth.confirm = () =>
//       authFactory.login(auth.user.email, auth.user.password)
//         .then(user => {
//           boardsFactory.setUserId(user.uid);
//           $location.path("/boards");
//           $timeout();
//         }).catch(alert);
//   });
