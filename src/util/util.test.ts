import { filterImageFromURL } from './util';

describe('filterImageFromUrl', () => {
    test('Promise rejects with error message on invalid file', () => {
        const invalidUrl = 'invalid image string'
        return expect(filterImageFromURL(invalidUrl))
            .rejects
            .toEqual('Error opening image file');
    });

    test('Promise resolves with url to filtered image', async () => {
        const validUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg';
        const result = await filterImageFromURL(validUrl);
        expect(result).toMatch(/.jpg$/);
    });
});