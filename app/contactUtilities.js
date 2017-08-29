var exports = module.exports ={};

/**
* Helper function for returnLargestLength.
* @param {Object} contact the contact who's name is being checked
* @returns {Number} the length of the contact's name.
*/
const getContactNameLength = function(contact){
  return contact.length;
};
/**
* Helper function for returnLargestLength, wraps Math.Max.
* @param {Number} a The accumulator
* @param {Number} b the current value
* @returns {Number} the larger of the provided values.
*/
const getMax = function(a,b){
  return Math.max(a,b);
};

/**
* Return the length of the largest element in the array.
* @param {Array} arrayToCheck the array to search through
* @returns the lenth of the longest element in the aray
*/
exports.returnLargestLength = function(arrayToCheck){
  var stringValues = arrayToCheck.map(getContactNameLength).reduce(getMax);
  return stringValues;
};

/**
* A function to sort two contacts by first name, descending (a>z)
* @param {Object} contactA One of the two contacts.
* @param {Object} contactB One of the two contacts.
* @returns 1 if a > b; -1 if b > a; 0 if a = b
*/
exports.sortByFirstName = function(contactA, contactB){
  var nameA = contactA["first_name"].toUpperCase();
  var nameB = contactB["first_name"].toUpperCase();
  if (nameA < nameB){
    return -1;
  }
  if (nameA > nameB){
    return 1;
  }
  return 0;
};

/**
* Combines a given contact object's first name and last name in a new string & returns.
* @param {Object} contactObject the object who's name is being combined
* @returns The full first and last name of the contact, separated by whitespace
*/
exports.buildNameStrFromContact = function(contactObject){
  return contactObject["first_name"] + " " + contactObject["last_name"];
};
