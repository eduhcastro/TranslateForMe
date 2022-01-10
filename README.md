<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="#">
    <img src="https://i.ibb.co/M6C9jnG/icon2.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TranslateForMe</h3>

  <p align="center">
    Offer a translation system to your users, a plugin capable of translating your website, simply and efficiently!
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/skillerm/TranslateForMeissues">Report Bug</a>
    ·
    <a href="https://github.com/skillerm/TranslateForMe/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
A little about:

* I looked a lot about some plugin that did the same function but I couldn't find it, so I decided to do my own!
* All tags and classes were created with random names, not to affect your site and its styles.
* The project was structured entirely with pure javascript, only Google translate is instantiated

## Comum area

### Usage
Add a script section with attribute **"translate="forme""**

Example:

```html
<script translate="forme" src="translateforme.google.js"></script>
```
This attribute is mandatory for the plugin to work.

Launch the plugin
```html
<script>
document.addEventListener('DOMContentLoaded', function () {
      new TranslateForMe.init({
        languages: ['en', 'pt'],
        saveLanguage: true,
        fonts: true
      });
    });
</script>
```
To work properly, instantiate the class only after the DOM is loaded.

### API
#### init([options])
```html
<script translate="forme" src="translateforme.google.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
      new TranslateForMe.init({
        languages: ['en', 'pt'],
        saveLanguage: true,
        fonts: true
      });
    });
</script>
```


Options:

- languages

  type: `Array[]`  
  Default: `'<unknown>'`

  Languages that will be added in the menu   <a href="#more">List</a>

- saveLanguage

  Type: `Boolean`  
  Default: `false`

  Enables the save language  mode, if activated, create a checkbox in the menu, if true, all pages will be translated according to the selected language.
  
- fonts

  Type: `Boolean`  
  Default: `true`

  If true, load Open Sans font style, for better menu look. (If it already exists, it will not be loaded.)

### More

languages:
``
["pt","en"]
``
More languages will be added soon.


## Developer area
### Built With

For development mode, here is a list of used frameworks/libraries
* [TypeScript](https://www.typescriptlang.org/)
* [Csso](https://github.com/css/csso)

Google translator was not included due to being an external module


<!-- GETTING STARTED -->

#### Starting

Install all modules.
* npm
  ```sh
  npm install
  ```

#### Commands

* Build
   ```sh
   npm run build
   
   Output:
   > translateforme@version build
   > npx tsc && npx ts-node src/addons/csso.ts && npx ts-node src/addons/json.ts
   ```
   All files will be created in the ./build folder
   
* Json
  ```sh
   npm run json
   
   Output:
   > translateforme@version json
   > npx ts-node src/addons/json.ts
   ```
   It will create a minified version of the translateforme.flags.json file, found in ./build
* Csso
  ```sh
   npm run csso
   
   Output:
   > translateforme@version csso
   > npx ts-node src/addons/csso.ts
   ```
  It will create a minified version of the translateforme.google.css file, found in ./build
   
### ...
Sorry for the little information, soon add more details about each function of the script.

<!-- CONTACT -->
## Contact

Eduardo Castro - eduh.castro19@gmail.com

