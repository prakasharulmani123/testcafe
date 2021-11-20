import { test, Selector } from 'testcafe';
import Login from './login';

fixture `Pharmacy Sales`
    .page `${process.env.STAGING_URL}/login`;
    
test('Create Sale', async (t: TestController) => {
    // await for login
    await Login(test);

    await t
        .typeText(Selector('#loginform').nth(1).find('[class^="form-control form-control-lg ng-untouched ng-prist"]'), 'ajay')
        .pressKey('tab')
        .typeText(Selector('#loginform').nth(1).find('[class^="form-control form-control-lg ng-untouched ng-prist"]'), '123456')
        .click(Selector('#loginform').nth(1).find('span').withText('Log In'))

    await t
        .click(Selector('app-header span').withText('Pharmacy'))

    await t
        .typeText('#patientName', 'PETER', {
            caretPos: 0
        })
        .click(Selector('#ngb-typeahead-1-0 span').withText('PETER'))
        .click(Selector('#main-wrapper label').withText('Credit'))
        .click(Selector('#main-wrapper [class^="form-control custom-select ng-untouched ng-pristin"]').nth(1))
        .click(Selector('#main-wrapper option').withText('MEDIZURA MADURAI'))

    await t
        .typeText('#selectProduct0', 'ABDIFER')
        .click(Selector('#ngb-typeahead-4-0 span').withText('ABDIFER'))
        .click('#selectBatch0')
        .click(Selector('#selectBatch0 option').withText('002(May 2026)/3'))
        .selectText('#saleQty0', 0, 0)
        .typeText('#saleQty0', '1')
        .click(Selector('#main-wrapper [class^="form-control custom-select font-12 p-l-0 p-r-0 ng-"]').nth(1))
        .click(Selector('#main-wrapper option').withText('30049088'))
        .click(Selector('#main-wrapper button').withText('Save').nth(1))
});
