'use strict';

var server = require('./server');
var ds = server.dataSources['tc-api'];
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  ds.disconnect();
});
