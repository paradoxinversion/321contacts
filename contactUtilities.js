var exports = module.exports ={};

const getElementLength = function(currentValue){
  return currentValue.length;
};

const getMax = function(a,b){
  return Math.max(a,b);
};

exports.returnLargestLength = function(arrayToCheck){
  var stringValues = arrayToCheck.map(getElementLength).reduce(getMax);
  return stringValues;
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
