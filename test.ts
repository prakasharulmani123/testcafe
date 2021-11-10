import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.google.com/`;

test('My first test', async t => {
    // Test code
    await t
        .expect(Selector("title").innerText).eql('Google')
});

