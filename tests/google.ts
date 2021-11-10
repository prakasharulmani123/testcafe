import { Selector } from 'testcafe';

fixture `Google Title`
    .page `https://www.google.com/`;

test('Google Title Test', async t => {
    // Test code
    await t
        .expect(Selector("title").innerText).eql('Google')
});

