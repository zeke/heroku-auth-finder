"use strict"

var netrc = require("netrc")

module.exports = function() {

  // Look for environment variable
  if (typeof["process"] && process.env && process.env.HEROKU_API_KEY)
    return process.env.HEROKU_API_KEY

  // Look in ~/.netrc
  var creds = netrc()['api.heroku.com']
  if (creds && creds.password) return creds.password

  return null
  // throw new Error("Heroku API key not found in environment or ~/.netrc file")
}
