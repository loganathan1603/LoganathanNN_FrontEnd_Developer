# Decathlon coding assignment

Checkout project from GIT repo shared.

Pre-requisite to run application --> Node

# Install & Run App
Open terminal and run command <npm i && npm run start> to install and run application.

# Pages:
1.) Discovery/ Home page: localhost:3000/

2.) Login: localhost:3000/login

3.) Checkout: localhost:3000/checkout (Authentication required. If not logged in, login screen will be shown).

4.) My Account/ Saved orders: localhost:3000/account (Authentication required. If not logged in, login screen will be shown).

# Test accounts:
1.) john.doe@nightpoint.in/ john.doe

2.) michael.zeperlin@nightpoint.in/ michael.zeperlin

3.) daniel.schwarzl@nightpoint.in/ daniel.schwarzl

# Checkout flow

1.) Go to home page & add products to cart.
Note: Products added to cart can't be added again.

2.) Click Cart link in navigation bar and head to checkout page.
use one of above shared test accounts to login into the app.
Invalid credentials will not allow user to submit order.

3.) Checkout page
Add/ remove quantity of products chosen.
Minimum quantity is 1 & '-' button will be disabled if the quantity is 1.
Delete product from cart by clicking on the trash icon.
Floating cart component --> summarize the price breakdown.

## Submit order
Click on submit order --> order successfully saved and user will be auto directed back to home page.

## My Account & Saved orders:
To view the account details, order details go to Account page(in nav bar). --> localhost:3000/account

4.) Head back to checkout page and empty cart message will be shown.


# Note
All details were stored in Redux and refreshing of page will lose all saved data.

# Mock data
Mock data for products and user accounts are present in src/mocks.
