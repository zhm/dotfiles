
if (!Object.keys) {  
  Object.keys = (function () {  
    var hasOwnProperty = Object.prototype.hasOwnProperty,  
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),  
        dontEnums = [  
          'toString',  
          'toLocaleString',  
          'valueOf',  
          'hasOwnProperty',  
          'isPrototypeOf',  
          'propertyIsEnumerable',  
          'constructor'  
        ],  
        dontEnumsLength = dontEnums.length  
  
    return function (obj) {  
      //if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object')  
  
      var result = []  
  
      for (var prop in obj) {  
        if (hasOwnProperty.call(obj, prop)) result.push(prop)  
      }  
  
      if (hasDontEnumBug) {  
        for (var i=0; i < dontEnumsLength; i++) {  
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i])  
        }  
      }  
      return result  
    }  
  })()  
}; 


if (typeof Object.getOwnPropertyNames !== "function") {
  Object.getOwnPropertyNames = function (obj) {
    var keys = [];

    // Only iterate the keys if we were given an object, and
    // a special check for null, as typeof null == "object"
    if (typeof obj === "object" && obj !== null) {    
      // Use a standard for in loop
      for (var x in obj) {
        // A for in will iterate over members on the prototype
        // chain as well, but Object.getOwnPropertyNames returns
        // only those directly on the object, so use hasOwnProperty.
        if (obj.hasOwnProperty(x)) {
          keys.push(x);
        }
      }
    }

    return keys;
  }
}



if (!Array.isArray) {  
  Array.isArray = function (arg) {  
    return Object.prototype.toString.call(arg) == '[object Array]';  
  };  
} 
