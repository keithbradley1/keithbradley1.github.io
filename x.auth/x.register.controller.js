// angular.module("app")
//   .controller("registerCtrl", function(authFactory, boardsFactory, $location, $timeout) {
//     const auth = this;
//     auth.actionLabel = "Register";

//     auth.confirm = () =>
//       authFactory.register(auth.user.email, auth.user.password)
//         .then(user => {
//           boardsFactory.setUserId(user.uid);
//           $location.path("/boards");
//           $timeout();
//         }).catch(alert);
//   });
