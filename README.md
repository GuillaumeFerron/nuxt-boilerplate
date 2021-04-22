
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
# Change the name of the project in package.json

# > npm install

# Create a .env file by duplicating and renaming the .env.example file at the root of the project

For development:
# > nuxt

For production:
# > nuxt build && nuxt start
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

## Options

#### Api

You have access to a built in api using a plain express server. In order to use it, create a `.env.json` file in the `api` folder, and uncomment the `serverMiddleware` line in the `nuxt.config.js` file.\
It comes out of the box with a support for json body for the requests thanks to [body-parser](https://www.npmjs.com/package/body-parser), and adds CORS support with the [cors](https://www.npmjs.com/package/cors) plugin. Refer to their documentation for advanced configuration.

#### Loader

There is a loader already implemented in the boilerplate. You can customize it by modifying the `components/utils/AjaxLoader.vue` component. When downloading the boilerplate, it'll be displayed by default on all new pages that the user goes to. A simple caching of the route will be done in the base store, and the loader will not get displayed again on those routes.

#### SEO

SEO is pre-handled by the Nuxt.js framework. To make sure you optimize it, make sure to add the `head` method in each route, and the `h1` and `h2` tags using the `seo-title` css class that will hide it.\
The sitemap is generated with the static route that you have in your project. In order to include the dynamic routes, you'll need to modify the `sitemap: generate` method, by doing the proper api calls if needed.

## Built With

* [Nuxt](https://nuxtjs.org/) - Server-Side rendering for Vue
* [Vue](https://vuejs.org/) - Front-End Framework
* [Jquery](https://jquery.com/) - Javascript Library
* [Bootstrap 4](https://getbootstrap.com/) - CSS Framework
* [SCSS](https://sass-lang.com/) - CSS Library
* [Express](https://www.expressjs.com/) - Node.js Framework

## Authors

* ![Github](https://avatars0.githubusercontent.com/u/11609053?s=25&v=4)
**Guillaume Ferron** - (https://github.com/GuillaumeFerron/)
