'use strict';
const uuid = require('uuid').v4;
const faker = require('faker');
const events = require('../events');
let store = process.env.STORE || 'CAPS';

require('../driver');
require('../vendor');

setTimeout=jest.fn();

describe('events handler tests', () => {
    let consoleSpy;
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
      })
      afterEach(()=>{
        consoleSpy.mockRestore();
      })
    let order = {
        orderId: uuid(),
        storeName: store,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    test('pick up handler test',() => {
        events.emit('pickup',order)
        expect(setTimeout).toHaveBeenCalled();
    })
    test('delivered handler test',() => {
        events.emit('delivered',order)
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('in-transit handler test',() => {
        events.emit('intransit',order)
        expect(setTimeout).toHaveBeenCalled();
    })
})