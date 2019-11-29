import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// function curriedFunc(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }
// curriedFunc(1)(2)(3);

// function curriedFunc (a) {
// 	console.log(a)
// 	return function (b) {
// 		console.log(a, b)
// 		return function (c) {
// 			console.log(a, b, c)
// 			return a + b + c;
// 		}
// 	}
// }
// curriedFunc(1)(2)(3)

// const curried = a => b => c => a + b + c;
// curried(1)(2)(3)
