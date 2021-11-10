import { Selector } from 'testcafe';

fixture `Google Title Test`
    .page `https://www.google.com/`;

test('My first test', async t => {
    // Test code
    await t
        .expect(Selector("title").innerText).eql('Google AAA')
});

