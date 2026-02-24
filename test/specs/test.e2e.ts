import { expect } from '@wdio/globals'
import LoginPage from '../../src/pages/login.page'
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
    
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard', 'secret_sauce');
       
    })
})

