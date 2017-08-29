var expect = require("chai").expect;
var contacts = require("../app/contacts");

var testContacts = [
  {
    "first_name": "Tanny",
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
  }
];

var testContacts2 = [
  {
    "first_name": 0,
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": "Tova",
    "last_name": "Myall",
    "email": false,
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
  }
];
describe("Contacts", function(){
  describe("Add Contact", function(){
    it("returns a contact object from supplied firstName, lastName, and email", function(){
      expect(contacts.addContactT("Johnny", "Five", "j@five.com")).to.have.property("first_name");
      expect(contacts.addContactT("Johnny", "Five", "j@five.com")).to.have.property("last_name");
      expect(contacts.addContactT("Johnny", "Five", "j@five.com")).to.have.property("email");
    });
  });

  describe("Add Contacts", function(){
    it ("returns a processed contacts object", function(){
      expect(contacts.addContactsT(testContacts)).to.be.a("object");
      expect(contacts.addContactsT(testContacts).processed.length).to.equal(4);
      expect(contacts.addContactsT(testContacts).invalidEntries).to.equal(0);
      expect(contacts.addContactsT(testContacts2).invalidEntries).to.equal(2);
      expect(contacts.addContactsT(testContacts2).processed.length).to.equal(4);
    });
  });
});
