var expect = require("chai").expect;
var contactUtilities = require("../app/contactUtilities.js");

describe("Contact Utilities", function(){
  describe("Get Longest Length", function(){
    it("returns the length of the largest array element", function(){
      expect(contactUtilities.returnLargestLength(["A", "aa", "aaaaaa"])).to.equal(6);
    });
  });

  describe("Get Max", function(){
    it ("returns the larger of two numbers", function(){
      expect(contactUtilities.getMaxT(5,10)).to.equal(10);
    });
  });

  describe("Sort by Firt Name", function(){
    it ("Return -1, 0, or 1, if nameA comes after, is equal, or comes before name B", function(){
      var testContacts = [{
        "first_name": "Tova",
        "last_name": "Myall",
        "email": "tmyall1@instagram.com",
      },
      {
        "first_name": "Engracia",
        "last_name": "Folger",
        "email": "efolger2@epa.gov",
      }];
      expect(contactUtilities.sortByFirstName(testContacts[0], testContacts[1])).to.equal(1);
      expect(contactUtilities.sortByFirstName(testContacts[1], testContacts[0])).to.equal(-1);
      expect(contactUtilities.sortByFirstName(testContacts[1], testContacts[1])).to.equal(0);

    });
  });

  describe("Build Full Name from Contact Object", function(){
    it ("returns a combined firstName and lastName separated by a space", function(){
      var contact = {
        "first_name": "Tova",
        "last_name": "Myall",
        "email": "tmyall1@instagram.com",
      };
      expect(contactUtilities.buildNameStrFromContact(contact)).to.equal("Tova Myall");
    });
  });
});
