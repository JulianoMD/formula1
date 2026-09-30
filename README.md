# Formula 1

E-commerce application developed in Angular for the sale and management of Formula 1 car miniatures.

The project simulates the experience of an online store, allowing users to view available products, add and remove items from the shopping cart, and complete a simulated purchase.

## Features

* Formula 1 miniature car catalog
* Product and product detail viewing
* Adding products to the shopping cart
* Removing products from the shopping cart
* Automatic item quantity calculation
* Automatic calculation of the total purchase amount
* Simulated checkout
* Navigation between pages using Angular Router
* Application developed as a Single Page Application (SPA)

## Technologies Used

* Angular 21
* Angular CLI 21.2.18
* TypeScript
* HTML5
* CSS3
* Angular Router

### Organization

**components/**
Contains the components responsible for the different parts of the application.

**services/**
Contains the rules and data used by the application, such as products and the shopping cart.

**app.routes.ts**
Defines the routes used for navigation between pages.

## Requirements

Before running the project, make sure you have installed:

* Node.js
* Angular CLI

## Installation

Clone the repository and access the project folder:

```bash
git clone <REPOSITORY-URL>

cd Formula1
```

Install the dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
ng serve
```

Then access:

```text
http://localhost:4200/
```

The application will automatically reload whenever the project files are modified.

## Available Scripts

### Run application

```bash
ng serve
```

### Run unit tests

```bash
ng test
```

### Generate build

```bash
ng build
```

### Create new components

```bash
ng generate component component-name
```

## Tests

Unit tests can be run with:

```bash
ng test
```

The project uses Vitest as the test runner configured by Angular.

## Production Build

To generate the production version of the application:

```bash
ng build
```

The generated files will be stored in the directory:

```text
dist/
```

## Resources

Official Angular documentation:

https://angular.dev/

Angular CLI documentation:

https://angular.dev/tools/cli

## Academic Project

Project developed for academic purposes, focusing on the practical application of web development concepts using Angular.
