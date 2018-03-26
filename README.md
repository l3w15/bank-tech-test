# Bank tech test
Makers academy practice tech test

## To install and run tests
```
$ git clone git@github.com:l3w15/bank-tech-test.git
$ open SpecHelper.html
```
The app can then be run in the browser console, for example:

[![Screen_Shot_2018-03-26_at_21.39.40.png](https://s6.postimg.org/5v3illca9/Screen_Shot_2018-03-26_at_21.39.40.png)](https://postimg.org/image/sjspl5tnx/)

## Approach and Structure

This is a deceptively simple challenge, however I have kept it as simple as possible.

The Account constructor is responsible for deposits and withdrawals and checks their validity before debiting or crediting the correct amount passing the relevant information to the Statement constructor. The Statement constructor then stores all of the transactions until it is asked to print them.

I feel that the methods used in the constructors follow the single responsibility principle, and the design of the app was entirely test driven.

As this was designed to run in the REPL I have kept the suggested formatting for the statement printout. Given more time I would allow for deposits and withdrawals of more specific amounts as currently only whole integers will work, and would handle edge cases such as a deposit of 250.555 when validating the amount entered.


### User Stories
```
As a client
So that I do not have to keep all my money in cash
I would like to have an account with a balance
```

```
As a client
So that I can put money into my account
I would like to be able to deposit an amount
And increase the balance by that amount
```

```
As a client
So that I can take money out of my account
I would like to be able to deposit an amount
And decrease the balance by that amount
```

```
As a client
So that I can take keep track of my spending
I would like to be able to print a statement
Showing the dates of deposits and withdrawals and the balance on that date
```
