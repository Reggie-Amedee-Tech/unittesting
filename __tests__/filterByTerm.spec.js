const filterByTerm = require("../src/filterByTerm");

describe('Filter Function', () => {
    
    test('It should filter by a search term(link)', () => {
         const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.link3.dev'}
        ];

        const output = [{id: 3, url: 'https://www.link3.dev'}]

        expect(filterByTerm(input, "link")).toEqual(output)
        expect(filterByTerm(input, "Link")).toEqual(output)

    }) 

    

    test('It should filter by a search term(url)', () => {
        const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.uri3.dev'}
        ];

        const output = [{id: 3, url: 'https://www.uri3.dev'}];

        expect(filterByTerm(input, 'uri')).toEqual(output)
    })
    

    test('It should filter for an empty search term', () => {
        const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.uri3.dev'},
        ];

        const output = undefined;

        expect(filterByTerm(input, '')).toEqual(output)
    })
})

