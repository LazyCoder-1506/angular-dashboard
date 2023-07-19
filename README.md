Dashboard built with:
- Angular
- Angular Material for some UI components such as dialog box and drap-drop
- TailwindCSS for styling
- Ngrx for central state management
- Highcharts for the beautiful charts
- json-server for converting local JSON file into fake REST API
- Karma-jasmine for unit testing


## My Learnings along the way

- Learnt angular, typescript and ngrx completely from scratch (had 0 knowledge of Angular ecosystem before this) in 2 days. Never learnt anything faster than this
- Angular is awesome. Everything comes out of the box :)
- Never really liked Material UI, and the verdict stands same after using Angular Material. Testing `mat` components is so compicated
- Learnt unit testing as well, never did unit testing before this
- Came across Gridster package for dragging and resizing sections on the page. Seemed like an overkill for me (because I'm a total beginner) but experienced folks may be able to create highly interactive dashboards with it

## Challenges I faced while working on the assignment

- My code as well as architecture is jumbled up, and had to make multiple refactors along the way. As I spend more time working on these I should get better at how to write better code as well as design my app better.
- Still confused about how to implement the search feature. A very basic way that I thought of was: have a variable named `searchQuery` in the settings state, and if this query appears as substring of the `title` of any card/chart, show that particular card/chart using `*ngIf="searchQuery.length == 0 || title.contains(searchQuery)"`
- Couldn't figure out how to test Angular Material components such as radio button
- I'm sure there are a lot of testcases I have missed to unit test
- Reordering whole sections works, but not exactly correct on mobiles
- DataLabel contrast color in donut charts (black text over black pie slice)

## Installation Guide

#### Step 0
Make sure node is installed and updated. Install Angular CLI if not already installled.
```
npm install -g @angular/cli
```

#### Step 1
Clone the repository to your local machine and open it's root once ready
```
git clone https://github.com/LazyCoder-1506/angular-dashboard.git
cd angular-dashboard
```

#### Step 2
Install npm packages
```
npm install
```
This will install all the necessary dependencies

#### Step 3
Start json-server
```
npx json-server --watch db.json
```
This will start the json-server on localhost port 3000 by default. It will use db.json file as a fake API endpoint.
If json-server is already installed globally in your machine, you can omit `npx`

#### Step 4
Launch the angular app in a separate terminal
```
ng serve
```
This will serve the angular app on localhost port 4200 by default.

#### Step 5
Unit testing in a separate terminal
```
ng test --code-coverage
```
This will run unit tests and show the report on localhost port 9876 by default. Make sure that json-server is running before testing

To kill any process, press `Ctrl+C` in corresponding terminal