var exports = module.exports ={};
exports.returnLargestLength = function(arrayToCheck){
  var largestElementLength = 0;
  arrayToCheck.forEach(function(element){
    if (element.length > largestElementLength ){
      largestElementLength = element.length;
    }
  });
  return largestElementLength;
};

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
