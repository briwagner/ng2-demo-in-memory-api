## Mixing Real API Calls with In Memory Api Module

This is a simple demo to show how we can mix real api calls with mock data, through a separate Angular module, [In Memory Web API](https://github.com/angular/in-memory-web-api).

The Services directory has three data services that are called by the People component. The first two use the In Memory API, the third makes a real request.

- GetMainMenu is a simple request
- GetPeople emulates the format of data returning from ElasticSearch 
- GetStarwars is a request to a live outside service

The In Memory Web Api is not included by default by Angular CLI. Add it to the package.json list, and npm install to get it installed. Basic usage is described on the project's Github page. When enabled in the main imports, it seems to override ALL outside API calls. Set the passThru configuration option to allow queries that don't match the mock database REST structure to proceed.

Mock data is 'hosted' in the mock database in the in-memory-data.service file. There is also a demo of a URL parser that allows us some control over how URL's are interpreted by the mock database. 

## Angular CLI Boilerplate below

## Angular2APIs

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
