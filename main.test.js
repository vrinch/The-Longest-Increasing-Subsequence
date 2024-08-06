const { expect } = require('chai');
const { run } = require('./main');

describe("Solution", function () {
    //
    //	First Example
    //
    it("should return the length of LIS for the given sequence", function () {
        const input = [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15];
        const result = run(input);
        expect(result).to.equal(6);
    });

    // Additional tests
    it("should return 1 for a single element sequence", function () {
        const input = [10];
        const result = run(input);
        expect(result).to.equal(1);
    });

    it("should return 1 for a sequence with all elements the same", function () {
        const input = [5, 5, 5, 5, 5];
        const result = run(input);
        expect(result).to.equal(1);
    });

    it("should return the length of LIS for an already sorted sequence", function () {
        const input = [1, 2, 3, 4, 5];
        const result = run(input);
        expect(result).to.equal(5);
    });

    it("should return the length of LIS for a reverse sorted sequence", function () {
        const input = [5, 4, 3, 2, 1];
        const result = run(input);
        expect(result).to.equal(1);
    });
});
