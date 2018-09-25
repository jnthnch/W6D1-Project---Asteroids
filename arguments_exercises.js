function sum () {
  const boundSlice = Array.prototype.slice.bind(arguments, arg1, arg2);
  let args = boundSlice();
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function sumRest (...args) {
  return args.reduce((acc, el) =>  acc + el, 0 );

}

Function.prototype.myBind = function (arg1, ...args) {
  const newFunc = (...b) => {
    return this.apply(arg1, args.concat(b));
  };
  return newFunc;
};

// simplified
// Function.prototype.myBind = function (arg1, ...args) {
//   return (...b) => {
//     return this.apply(arg1, args.concat(b));
//   };
// };

function curried(numArgs) {
  let numbers = [];
  const newFunc = (b) => {
    numbers.push(b);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return newFunc;
    }
  };
  return newFunc;
}

Function.prototype.curry = function (numArgs) {
  let args = [];
  const newFunc = (b) => {
    args.push(b);
    if (args.length === numArgs) {
      // return this.apply(null, args);
      return this(...args);
    } else {
      return newFunc;
    }

  };
  return newFunc;
};


// if previous problem used a callback
// function curry(numArgs, callback) {
//   let args = [];
//   const newFunc = (b) => {
//     args.push(b);
//     if (args.length === numArgs) {
//       // return this.apply(null, args);
//       return callback(...args);
//     } else {
//       return newFunc;
//     }
//
//   };
//   return newFunc;
// }
