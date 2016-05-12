'use strict'

const getfibs = require('./app.js');
const expect = require('expect.js');



expect(getfibs(3)).to.eql([1,1,2]);
expect(getfibs(-3)).to.not.be.ok(); 
expect(getfibs('')).to.not.be.ok();




