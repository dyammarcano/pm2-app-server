const Rx = require('rx');

let array = [ 1, 2, 3, 4, 5 ];

let observable = Rx.Observable.create((observer) => {
  observer.onNext(42);
  observer.onCompleted();
});


let subscription = observable.subscribe(
  function (value) {
    console.log('Next: %s.', value);
  },
  function (ev) {
    console.log('Error: %s!', ev);
  },
  function () {
    console.log('Completed!');
  }
);

subscription.dispose();
