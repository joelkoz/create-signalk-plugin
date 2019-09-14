#!/usr/bin/env node
"use strict";

var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.lookup(() => {
   env.run("signalk-plugin");
});
