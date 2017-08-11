var exports = module.exports ={};
//Should return the largest length number of the supplied array
exports.returnLargestLength = function(arrayToCheck){
  var largestElementLength = 0;
  arrayToCheck.forEach(function(element){
    if (element.length > largestElementLength ){
      largestElementLength = element.length;
    }
  });
  return largestElementLength;
};

//Takes in a contact obj
exports.sortByFirstName = function(a, b){
  var nameA = a["first_name"].toUpperCase();
  var nameB = b["first_name"].toUpperCase();
  if (nameA < nameB){
    return -1;
  }
  if (nameA > nameB){
    return 1;
  }

  return 0;
};
//Try to do the above, but with a mapping function instead!
