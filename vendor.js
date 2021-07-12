'use strict';

const events = require('./events.js');
require('dotenv').config();
const faker = require('faker');
const uuid = require('uuid').v4;


let payload = {

  storeName: process.env.STORE,
  orderId: uuid(),
  customerName: faker.name.findName(),
  address: faker.address.streetAddress()
}

events.emit('pickup', payload)


events.on('delivered', deliveredHandler);

function deliveredHandler(payload) {
  console.log(`VENDOR: Thank You for delivering ${payload.orderId}!`);
}

