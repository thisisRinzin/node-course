const utils = require('./utils');

describe('utils', () => {
    it('should add two numbers', ()=>{
        let res = utils.add(11, 11);
    
        if(res !== 22)
        {
            throw new Error(`Expected 22 but got ${res}`);
        }
    });
    
    it('should square a number', ()=>{
        let res = utils.square(4);
        if(res !== 16){
            throw new Error(`Expected 16 but got ${res}`);
        }
    });
});

