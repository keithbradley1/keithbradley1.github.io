// angular.module("app")
//   .controller("pinsCtrl", function(pinFactory, $timeout) {
//     const pins = this;

//     pins.editing = false;
//     let editKey = null;

//     pinFactory.listenPins(data => {
//       pins.list = data;
//       $timeout();
//     });

//     pins.submit = () => pinFactory.createPin(pins.newPin).then(() => pins.newPin = null);
//     pins.delete = (key) => pinFactory.deletePin(key).then(() => pins.newPin = null);
//     pins.update = () => pinFactory.updatePin(editKey, pins.newPin);
//     pins.edit = (key, pin) => {
//       pins.editing = true;
//       editKey = key;
//       pins.newPin = pin;
//       pinFactory.deletePin(key);
//     };


//   });
