const contactUtilities = require("./contactUtilities");
const InvalidInputError = require("./InvalidInputError");
const contactStorage = [];
const invalidContactStorage = [];

/**
* Adds a single contact to contact storage and returns thast contact
* @param {String} firstName the contact's first name.
* @param {String} lastName the contact's last name.
* @param {String} email the contact's email Address
* @throws {InvalidInputError} Throws if one of the params is not a string
* @returns the contact object
*/
const addContact = function(firstName, lastName, email) {
  const contact = {
    "first_name" : firstName,
    "last_name" : lastName,
    "email" : email
  };

  //Handle bad inputs
  if (typeof contact["first_name"] !== "string"){
    throw new InvalidInputError("The input for First Name was invalid!", contact);
  }
  if (typeof contact["last_name"] !== "string"){
    throw new InvalidInputError("The input for Last Name was invalid!", contact);
  }
  if (typeof contact["email"] !== "string"){
    throw new InvalidInputError("The input for Email was invalid!", contact);
  }
  contactStorage.push(contact);
  return contact;
};

/**
* Bulk-Adds contacts to contact storge
* @param {Array} contacts an array of contact objects
* @returns the lenth of the longest element in the aray
*/
const addContacts = function(contacts) {
  const processedContacts = {
    "processed" : [],
    "invalidEntries" : 0
  };

  console.log("Loading Contacts...");
  contacts.forEach(function (contactElement){
    try{
      processedContacts.processed.push(addContact(
        contactElement["first_name"],
        contactElement["last_name"],
        contactElement["email"]
      ));
    } catch (e){
      if (e.name == "InvalidInputError"){
        processedContacts.processed.push(e.contact);
        processedContacts.invalidEntries++;
        invalidContactStorage.push(e.contact);
      }
    }
  });
  console.log(contactStorage.length + " Contacts have been loaded! There were " +
  invalidContactStorage.length + " invalid contacts found.");
  return processedContacts;
};
/**
* Prints gathered invalid contacts to the screen
*/
const printInvalidContacts = function(){
  console.log("The following " + invalidContactStorage.length + " contacts are invalid:");
  invalidContactStorage.forEach(function(contact){
    console.log("First Name: " + contact["first_name"] + " ".repeat(4) +
    "Last Name: " + contact["last_name"] + " ".repeat(4) +"Email Address: " +
    contact["email"]);
  });
};

/**
* Pads the right side of the string
*/
const padWithWhitespace = function(str, totalWhiteSpace){
  var spaceDifference = totalWhiteSpace - str.length;

  return str += " ".repeat(spaceDifference);
};

/**
* Prints gathered invalid contacts to the screen
* @param {String} dividerChar the character that should be placed in the center/ as a dividerChar
* @param {String} boderChar the character that should be placed in the center/ as a dividerChar
* @param {String} nameLabelLength the character that should be placed in the center/ as a dividerChar
* @param {String} emailLableLength the character that should be placed in the center/ as a dividerChar
* @param {String} margin the character that should be placed in the center/ as a dividerChar
* @param {String} marginAmt the character that should be placed in the center/ as a dividerChar
* @param {String} centerDivider the character that should be placed in the center/ as a dividerChar
*/
const buildHorizontalBorder = function(dividerChar, borderChar, nameLabelLength, emailLabelLength, margin, marginAmt, centerDivider){
  let border = "";
  let aboveNameLength = nameLabelLength + (margin * marginAmt);
  border += dividerChar + borderChar.repeat(aboveNameLength);
  border += (typeof centerDivider !== "string" ? dividerChar : centerDivider) ;
  let aboveEmailLength = emailLabelLength + (margin * marginAmt);
  border += borderChar.repeat(aboveEmailLength) + dividerChar;
  console.log(border);
};

/**
* Prints all contacts to the screen
*/
const printContacts = function() {
  var verticalBorderChar = "|";
  var horizontalBorderChar = "-";
  var borderCenterChar = "+";
  var marginWidth = 2;
  var margins = 2; // the margins on either side the labels.
  console.log("Printing all contacts.");
  //What is the max length of one line?
  var listMargin = " ".repeat(marginWidth);
  var longestNameLength = contactUtilities.returnLargestLength(
    contactStorage.map(contactUtilities.buildNameStrFromContact)
  );
  var longestEmailLength = contactUtilities.returnLargestLength(
    contactStorage.map(function(currentValue){
      return currentValue["email"];
    })
  );
  var borderArgs = [
    verticalBorderChar,
    horizontalBorderChar,
    longestNameLength,
    longestEmailLength,
    marginWidth,
    margins,
    borderCenterChar];
  //TODO: See if I can move the entire process of building a line (symbols and all) in build border
  buildHorizontalBorder.apply( buildHorizontalBorder, borderArgs);
  contactStorage.sort(contactUtilities.sortByFirstName).forEach(function(contact){
    var contactNameLabel = contactUtilities.buildNameStrFromContact(contact);
    var contactEmailLabel = contact["email"];

    contactNameLabel = padWithWhitespace(contactNameLabel, longestNameLength);
    contactEmailLabel= padWithWhitespace(contactEmailLabel, longestEmailLength);
    var output = verticalBorderChar + listMargin + contactNameLabel  + listMargin + verticalBorderChar + listMargin + contactEmailLabel  + listMargin + verticalBorderChar;
    console.log(output);
  });
  buildHorizontalBorder.apply( buildHorizontalBorder, borderArgs);
  //console.log(topAndBottom);
  printInvalidContacts();
};

const testAddContacts = function(){
  console.assert(addContact("Johnny", "Five", "johnny@five.net") == contactStorage[contactStorage.length-1],
    "addContact('Johnny', 'Five', 'johnny@five.net'):: Last added contact in storate does not match function output");
};

testAddContacts();
exports.addContactT = function(firstName, lastName, email){
  return addContact(firstName, lastName, email);
};

exports.addContactsT = function(contacts){
  return addContacts(contacts);
};
////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": 56,
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": "Tova",
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
  },
  {
    "first_name": "Engracia",
    "last_name": "Folger",
    "email": "efolger2@epa.gov",
  },
  {
    "first_name": "Conroy",
    "last_name": "Honsch",
    "email": "chonsch3@sohu.com",
  },
  {
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": "vcankett4@washington.edu",
  },
  {
    "first_name": "Mateo",
    "last_name": "Da Costa",
    "email": "mdacosta5@about.com",
  },
  {
    "first_name": "Ambrose",
    "last_name": "Scullard",
    "email": "ascullard6@timesonline.co.uk",
  },
  {
    "first_name": "Shaylah",
    "last_name": "Fairney",
    "email": "sfairney7@stumbleupon.com",
  },
  {
    "first_name": "Pier",
    "last_name": "Waine",
    "email": "pwaine8@unc.edu",
  },
  {
    "first_name": "Karita",
    "last_name": "Bough",
    "email": "kbough9@angelfire.com",
  },
  {
    "first_name": "Marguerite",
    "last_name": "Lafayette",
    "email": "mlafayettea@bravesites.com",
  },
  {
    "first_name": "Northrop",
    "last_name": "Bauchop",
    "email": "nbauchopb@pagesperso-orange.fr",
  },
  {
    "first_name": "Devon",
    "last_name": "Bocking",
    "email": "dbockingc@comcast.net",
  },
  {
    "first_name": "Willdon",
    "last_name": "Hedley",
    "email": "whedleyd@purevolume.com",
  },
  {
    "first_name": "Charil",
    "last_name": "Clegg",
    "email": "cclegge@weibo.com",
  },
  {
    "first_name": "Nessi",
    "last_name": "Bywaters",
    "email": "nbywatersf@shop-pro.jp",
  },
  {
    "first_name": "Mercy",
    "last_name": "Browncey",
    "email": "mbrownceyg@yelp.com",
  },
  {
    "first_name": "Didi",
    "last_name": "Grose",
    "email": "dgroseh@google.com.hk",
  },
  {
    "first_name": "Niccolo",
    "last_name": "Spruce",
    "email": "nsprucei@wordpress.com",
  },
  {
    "first_name": "Winston",
    "last_name": "Hixley",
    "email": "whixleyj@homestead.com",
  },
  {
    "first_name": "Jedai",
    "last_name": 6,
    "email": "jedai@sab.com",
  },
  {
    "first_name": 2,
    "last_name": 6,
    "email": "breakingrules@isuck.com",
  },
  {
    "first_name": "Seemingly",
    "last_name": "Okay",
    "email": false,
  }
]);

printContacts();
