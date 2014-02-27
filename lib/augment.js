'use strict';



function augment(a, b){
  for (var key in b) {
    if (!b.hasOwnProperty(key)) continue;
    a[key] = b[key];
  }
  return a;
}



module.exports = augment;