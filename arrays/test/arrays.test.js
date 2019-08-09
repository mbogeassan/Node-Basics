let arrays; // = require('../demo/arrays');

try {
    arrays = require('../demo/arrays');
    console.log('To test: demo/arrays.js');
} catch (e) {
    try {
        arrays = require('../arrays');
        console.log('To test: arrays.js');
    } catch (e) {
        console.log('File arrays.js not found.');
    }
}

describe('Array exercises', () => {

    beforeAll(() => {
    });

    it('logArray', () => {
        expect(typeof arrays.logArray).toBe('function');
        let spy;
        spy = jest.fn(txt => txt + '|');
        console['log'] = spy;
        arrays.logArray([1, 5, 7, 3]);
        arrays.logArray([]);
        expect(spy).toHaveBeenCalledTimes(4);
        expect(spy.mock.calls).toEqual([[1], [5], [7], [3]]);
        spy.mockRestore();
    });

    it('cloneArray', () => {
        let arr = [1, 5, 7];
        let result = arrays.cloneArray(arr);
        expect(result).not.toBe(arr);
        expect(result).toEqual(arr);
    });

    it('firstElement', () => {
        expect(arrays.firstElement([1, 5, 7])).toBe(1);
        expect(arrays.firstElement(['foo', 'bar'])).toBe('foo');
        expect(arrays.firstElement([])).toBe(undefined);
    });

    it('lastElement', () => {
        expect(arrays.lastElement([1, 5, 7])).toBe(7);
        expect(arrays.lastElement(['foo', 'bar'])).toBe('bar');
        expect(arrays.lastElement([])).toBe(undefined);
    });

    it('nfirstElements', () => {
        expect(arrays.nFirstElements([1, 5, 7], 2)).toEqual([1, 5]);
        expect(arrays.nFirstElements(['foo', 'bar'], 1)).toEqual(['foo']);
        expect(arrays.nFirstElements([1, 4, 6], -5)).toEqual([]);
        expect(arrays.nFirstElements([1, 4, 6], 0)).toEqual([]);
        expect(arrays.nFirstElements([1, 4, 6])).toEqual([]);
    });

    it('nlastElements', () => {
        const toTest = arrays.nLastElements;
        expect(toTest([1, 5, 7], 2)).toEqual([5, 7]);
        expect(toTest(['foo', 'bar'], 1)).toEqual(['bar']);
        expect(toTest([1, 4, 6], -5)).toEqual([]);
        expect(toTest([1, 4, 6], 0)).toEqual([]);
        expect(toTest([1, 4, 6], 10)).toEqual([]);
        expect(toTest([1, 4, 6])).toEqual([]);
    });

    it('toStringWithSeparator', () => {
        const toTest = arrays.toStringWithSeparator;
        let output = toTest([4, 'foo', 10.1, 'bar'], ';');
        expect(output).toEqual('4;foo;10.1;bar');

    });

    it('sumSquaresOfVector', () => {
        const toTest = arrays.sumSquaresOfVector;
        expect(toTest([2, 6, 8])).toBe(104);
        expect(toTest([])).toBe(0);
    })

    it('averageOfVector', () => {
        const toTest = arrays.averageOfVector;
        expect(toTest([2, 6, 8, 5])).toBe(5.25);
        expect(toTest([])).toBe(NaN);
    })

    it('toUl', () => {
        const toTest = arrays.toUl;
        let colors = ['white', 'red', 'blue'];

        expect(toTest(colors)).toEqual(
            '<ul><li>white</li><li>red</li><li>blue</li></ul>'
        )
    });

    it('toUlDeep', () => {
        const toTest = arrays.toUlDeep;
        let list = [4, ['foo', 'bar'], 8];
        expect(toTest(list)).toEqual(
            '<ul><li>4</li><li><ul><li>foo</li><li>bar</li></ul></li><li>8</li></ul>'
        );
    });

    it('sortStringArray', () => {
        const toTest = arrays.sortStringArray;
        let arr = ['c', 'a', 'ö', 'b', 3];
        expect(toTest(arr)).toEqual([3, 'a', 'b', 'c', 'ö']);
    });

    it('sortNumericVector', () => {
        const toTest = arrays.sortNumericVector;
        let arr = [40, 100, 1, 5, 25, 10];
        expect(toTest(arr)).toEqual([1, 5, 10, 25, 40, 100]);
    });

    it('sortObjectArray', () => {
        const toTest = arrays.sortObjectArray;
        let books = [
            { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
            { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
        ];
        expect(toTest(books, 'title')).toEqual(
            [
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
                { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
                { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            ]
        );

        expect(toTest(books, 'author')).toEqual(
            [
                { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
                { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
            ]
        );

        expect(toTest(books, 'title')).toEqual(
            [
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
                { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
                { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            ]
        );

        expect(toTest(books, 'libraryID')).toEqual(
            [
                { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
                { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
            ]
        );
    });

    afterAll(() => {
    });
});