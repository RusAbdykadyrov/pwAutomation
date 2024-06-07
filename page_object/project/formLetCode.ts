import { Page, expect } from "@playwright/test";
import _ from 'lodash';

export class dateLetCode {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }
    get firstName() {
        return "#firstname";
    }
    get lastName() {
        return "#lasttname";
    }
    get getEmail() {
        return "#email";
    }
    get codeCountry() {
        return '.control .select select';
    }
    get phoneNumber() {
        return '#Phno';
    }
    get addressLine() {
        return '#Addl1';
    }
    get state() {
        return '#state';
    }
    get country() {
        return '#country';
    }
    get postalCode(){
    return'#postalcode';
    }
    async formLetCodeInput() {
        await this.page.locator(this.firstName).fill('Ppppxwwxwxwxw');
        const fieldValue = await this.page.locator(this.firstName).getAttribute('value');
        console.log('First Name:', fieldValue);
        expect(fieldValue).not.toEqual('');

        await this.page.locator(this.lastName).fill('POLIS');
        const lastNameValue = await this.page.locator(this.firstName).getAttribute('value');
        console.log('Last Name:', lastNameValue);
        expect(lastNameValue).not.toEqual('');

        await this.page.locator(this.getEmail).fill('qwert@top.com');
        const emailValue = await this.page.locator(this.getEmail).getAttribute('value');
        console.log('Email:', emailValue);

        async function selectCountry(page, countrySelector, codeCountry) {
         await page.selectOption(countrySelector, { value: codeCountry});
        }
        await selectCountry(this.page, this.codeCountry, '351'); // рандом не идет ((((

       
        const phoneNumber = _.random(1000000000, 9999999999).toString();   // рандом 
        await this.page.locator(this.phoneNumber).fill(phoneNumber);
        console.log('Phone Number:', phoneNumber); 
       /// спеку что это только цифры ???

        await this.page.locator(this.addressLine).fill('56677RF tgbhyb jijhu');
        console.log('Address Line:', '56677RF tgbhyb jijhu');

        await this.page.locator(this.state).fill('NY');
        console.log('State:', 'NY');
        

        // await this.page.locator(this.postalCode).fill('12345');
        // console.log('Postal-Code:', ' 12345')
        const randomPostalCode = _.random(10000, 99999).toString();
        await this.page.locator(this.postalCode).fill(randomPostalCode); // Заполняем поле почт. индекса случайно
        console.log('Random Postal Code:', randomPostalCode);


        console.log('Form Submitted!');
    }
}

