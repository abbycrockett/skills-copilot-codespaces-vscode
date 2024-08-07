// Create web server to serve comments API

var http = require('http');
var fs = require('fs');
var path = require('path');

var comments = [];    // Array to store comments