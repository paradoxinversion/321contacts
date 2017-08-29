"use strict";

module.exports = function InvalidInputError(message, contact){
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.contact = contact;
};

require("util").inherits(module.exports, Error);
