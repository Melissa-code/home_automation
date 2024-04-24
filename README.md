# Domotique

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.


The goal will be to perform the following actions and functionalities :

- Create two buttons "Report a problem (Signaler un problème)" and "Admin access (Accès administrateur)".

- Display the time dynamically. It should be possible to increment the timer by 30 minutes each time the button is clicked.

- Change the states of the rooms (garage, pool, etc.) based on boolean color variables (red: false, green: true, blue: unknown).

- Add a button for each room that forces the status change.

- It should also be possible to record events (e.g., forcing the lighting of the pool, turning on the lights because a scenario is activated by the program...).



## Table of contents

1.  [Prerequisites](#Prerequisites)
2.  [Installation](#Installation)
3.  [Run](#Run)
4.  [Code scaffolding](#Code-scaffolding)
5.  [Build](#Build)
6.  [Further help](#Further-help)
7.  [Build with](#Build-with)
8.  [Authors](#Authors)
9.  [Licence](#Licence)



## Prerequisites

- Node.js and npm (node.js version 18.18.0, npm version version 9.8.1) [Node.js](https://nodejs.org/en/download)

- Angular CLI (version 9.8.1) [Angular CLI](https://github.com/angular/angular-cli)



## Installation

1. Download the zip or clone the project in local :

`git clone https://github.com/Melissa-code/home_automation.git`

2. Move into the directory : 

`cd /path/to/the/file/home_automation`

3. Open the project with a code editor, for instance Visual Studio Code 

4. Install the npm dependencies :

`npm install`


### If you prefer create a new project : 

1. `ng new domotique --no-strict --standalone=false` (-> select : CSS -> SSG select : no)

2. Install Bootstrap 3 : `npm install --save bootstrap@3`

3. Copy the path in node_modules->bootstrap->dist->css->bootstrap.min.css

4. Paste it in the angular.json file : 

```line 37: 
    "styles": [
		"node_modules/bootstrap/dist/css/bootstrap.min.css",
              	"src/styles.css"
            ],
```

5. Stop and restart the server 



## Run 

1. Start the local web server and the browser : 

Run `ng serve --open` for a dev server. 

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


2. Stop it :

Press both `ctrl + C`



## Code scaffolding

Run `ng generate component component-name` to generate a new component, for the project :

- `ng generate component header`
- `ng generate component footer`
- `ng generate component article`
- `ng generate component hour`

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- `ng generate service hour`



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Build with 

### Languages & frameworks 

- Angular [Angular documentation](https://angular.io/)

- Angular CLI [Angular CLI](https://angular.io/cli)

- Bootstrap 3 [Bootstrap](https://getbootstrap.com/docs/3.4/)

- Git [Git documentation](https://git-scm.com/docs/git)


### Tools 

- GitHub [GitHub](https://github.com/)

- Plugin for Visual Sudio Code : Angular Language Service


### IDE 

- Visual Studio Code [VSCode](https://code.visualstudio.com/)



## Authors 

Oceane, Gaspard and Melissa



## Licence

MIT 