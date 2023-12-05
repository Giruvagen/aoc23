const expect = require("chai").expect;
const day1 = require("../day1.js");

describe('day1tests', () => {
    context('given a string representations of 1 number', () => {
        it("should return the number representation of that number", () => {
            expect(day1.day1function(["1"])).to.equal(1);
        });
    });

    context('given a string representations of 2 numbers', () => {
        it("should return the number representation of the concatentation of those number", () => {
            expect(day1.day1function(["12"])).to.equal(12);
        });
    });
            
    context('given a string representations of 3 numbers', () => {
        it("should return the number representation of the concatentation of first and last numbers", () => {
            expect(day1.day1function(["123"])).to.equal(13);
        });
    });
                        
    context('given a string representations of 2 numbers split by a word', () => {
        it("should return the number representation of the concatentation of the first and last numbers", () => {
            expect(day1.day1function(["1one2"])).to.equal(12);
        });
    });
    
});