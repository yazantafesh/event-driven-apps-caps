'use strict';

const events = require('./events.js');

events.on('pickup', pickupHandler);

function pickupHandler(payload){

  setTimeout(function () {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(function () {
    console.log(`DRIVER: delivered ${payload.orderId}`);
    events.emit('delivered', payload);
  }, 4000);
}