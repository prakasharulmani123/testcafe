import {} from 'testcafe';

fixture `Login`
    .page `${process.env.STAGING_URL}/login`;

export default function Login(test) {
    test('Login with Username and Password', async t => {
        // Login
        await t.typeText('input[type="text"]', process.env.USERNAME)
            .typeText('input[type="password"]', process.env.PASSWORD)
            .click('button[class="btn btn-block btn-lg btn-info"]')
            .wait(4000);
    });
}
