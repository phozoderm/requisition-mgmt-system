# RequisitionMgmtSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

I've prepared a hard-coded data in the `src/app/homepage/data.ts` file to use it on this web app.

For each project selected, Project Details section shows details about that section.

The stage progress indicator shows which stage project is in using different colors.
The following stages are disabled, so I used grey color.

I could not integrate sort functionality on the HTML table element using Angular in reasonable time. As a last resort,
I implemented sort manually only for "Item Code" column.

I implemented the page responsive, however, the stage indicator component is not perfect.
I could not decide how to make it look on lower breakpoints, so I left it as is. Other than, page looks good on lower breakpoints.

Only "Add amount" and "Add percentage" buttons are functional, the rest are only for view.

I show a toast (notification) when no items are selected and "Add amount" or "Add percentage" are clicked.

I show a modal when "Add amount" or "Add percentage" are clicked, with an input inside. If the input
value is "0" then "Save" button is disabled.

## Install Dependencies

I did not include `node_modules` folder in this project. Please run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
