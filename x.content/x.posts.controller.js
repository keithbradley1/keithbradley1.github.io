// angular.module("app")
//   .controller("boardsCtrl", function(boardsFactory, pinFactory, $timeout, $location) {
//     const boards = this;

//     boards.goToBoard = (boardId) => {
//       pinFactory.setBoardId(boardId);
//       $location.path("/pins");
//     };

//     boards.submit = () => boardsFactory.createBoard(boards.newBoard).then(() => boards.newBoard = null);
//     boards.deleteBoard = (boardId) => boardsFactory.removeBoard(boardId);
//     boards.editBoard = () => {

//     };

//     boardsFactory.listenBoards(data => {
//       boards.list = data;
//       $timeout();
//     });

//   });
