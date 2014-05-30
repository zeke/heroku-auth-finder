"use strict"

require("dotenv").load()
var assert = require("assert")
var auth = require("..")

describe("auth()", function() {

  it("looks for HEROKU_API_KEY", function() {
    process.env.HEROKU_API_KEY = "xyz"
    assert.equal(auth(), "xyz")
  })

  it("reads from ~/.netrc", function() {
    delete process.env.HEROKU_API_KEY
    assert(typeof(auth()), "string")
    assert(auth().length > 16)
  })

})
