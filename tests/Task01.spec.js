
import { test, expect , request} from '@playwright/test';
const {ZipCode} = require('../APIs/ZipCode');

test('TC01 - Verify valid country and postal code returns 200 and correct body ', async ({ request }) => {
const ValidTestCase = new ZipCode (request);
await ValidTestCase.GetMethodAPIs('us' ,'90210' , 'TC01');
  

});

test('TC02 - Verify invalid postal code returns 404 ', async ({ request }) => {

    const invalidPostalCode = new ZipCode (request);
    await invalidPostalCode.GetMethodAPIs('us' ,'3040' , 'TC02');

});

test('TC03 - Verify invalid country code returns 404 ', async ({ request }) => {

   const invalidCountryCode = new ZipCode (request);
   await invalidCountryCode.GetMethodAPIs('Eg' ,'90210', 'TC03');
});


