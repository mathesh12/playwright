import { test } from '@playwright/test';
import{loginPage} from '../pages/loginpage'


test('login test', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');

 const login = new loginPage(page);

 await login.login('standard_user','secret_sauce');
});
