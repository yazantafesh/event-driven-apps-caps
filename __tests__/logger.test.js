'use strict';
const events = require('../events');
require('../logger');
describe('logger tests',()=>{
    let consoleSpy;
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,'log').mockImplementation();
    })
    afterEach(()=>{
        consoleSpy.mockRestore(); 
    })
    test('pickup logger test',()=>{
        events.emit('pickup',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('delivered logger test',()=>{
        events.emit('delivered',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('in-transit logger test',()=>{
        events.emit('in-transit',{});
        expect(consoleSpy).toHaveBeenCalled();
    })
})