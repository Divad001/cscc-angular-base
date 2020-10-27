## Goal

The main goal of the app is to create an **Angular** application, which is able to authenticate a user with a the previously developed backend provider.

## Basics

The app should have a **Login** page without any design

## Login

The login page should contain a **form** ([Angular forms](https://angular.io/start/start-forms)) with two controls: **username** (or email) and **password**. Use basic validation, meaning that both fields are required, and the password should be at least 8 characters long.
Occurring errors must be displayed to the user in a form of your choosing.

## Auth Service

Generate an authentication service with the **Angular CLI**.
This service should implement methods which respectively let the user to **login** and **logout**.
Make sure to have a variable to determine whether the user is logged in.
Additional helper methods can be implemented as well.
The token returned from the backend should be decoded and stored on the frontend (in localStorage). For this you can research libraries that help you decode JWT.
If the token expires, the user should be logged out immediately.

# XTRAH

## Routing + Guarded page

### Only do the following if you've done all the above, the code runs and it works as expected!

Update the app so that there are two separate pages, which you can navigate between. You'll be able to do this if you research a bit on **Routing**.
Make one page only accessible once the user has logged in, otherwise the user is redirected to the login page.
A little help here: you will need **Route Guards**
