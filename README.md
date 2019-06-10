# VscodeNgLanguageService340

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

This is a test application to reproduce [Bug 340 of vscode-ng-language-service](https://github.com/angular/vscode-ng-language-service/issues/340)

To reproduce:
1. Clone this repository to the hard drive
2. Run `ng build test-library` from the working copy
3. Open the working copy in VS Code with `vscode-ng-language-service` installed
4. Open `application.html` in VS Code
5. See errors:
   1. 'bug-example' is not a known element:
      1. If 'bug-example' is an Angular component, then verify that it is part of this module.
      2. If 'bug-example' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.",
   2. The pipe 'examplePipe' could not be found
6. Run `ng serve --open` and verify that the page correctly renders:
```
This is the app component This is the example component. Input value: Hello World
This is the example pipe. Value passed in: Hello World
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
