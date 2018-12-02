
# nuxt-boilerplate

A boilerplate for Nuxt projects. It includes Bootstrap | SCSS | JQuery.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node.js > 8.0.0
npm > 6.0.0 or yarn > 1.0.0
```

### Installing

Here are the steps you need to run in order to get the project up and running

```
Change the name of the project in package.json
> npm install
> npm run dev
```

## Usage

After setting up the project (see [Installing](#installing)) :

##### Vue

* Vue pages should be included in **_pages_** folder.
* Vue components should be included in **_components_** folder. Try to keep the project tree organized by creating subfolders according to the page they are used in. 
Ex: Components used in a homepage should be included in a **_components/home_** folder. Components used across many pages should be included in a **_components/globals_** folder.

##### CSS

* All styling that should be available across the application should be in **_assets/sass_** folder.
* **_index.scss_** imports the mixins. Do not add style in that file.
* **__animations.scss_** declares the css animations (useful for Vue Transitions).
* **__custom.scss_** declares custom css (to override plugins styling for instance).
* **__fonts.scss_** declares the fonts.
* **__globals.scss_** declares the global styling to be used across the whole application.
* **__mixins.scss_** declares the cross browser mixins (Like transitions, transform, etc.).
* **__variables.scss_** declares variables that could be reused (colors, sizes).

Please refer to the README files in each folder for more information.

## Built With

* [Nuxt](https://nuxtjs.org/) - Server-Side rendering for Vue
* [Vue](https://vuejs.org/) - Front-End Framework
* [Jquery](https://jquery.com/) - Javascript Library
* [Bootstrap 4](https://getbootstrap.com/) - CSS Framework
* [SCSS](https://sass-lang.com/) - CSS Library

## Authors

* **CandyDigital** - (https://candydigital.co)

## License

This project is licensed under CandyDigital © 2018
