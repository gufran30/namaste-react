## npm :

- not have full form
- used to maintain packages.

## package :

- also known as dependencies.
- our project depends on a lot of packages.
- and npm manages those packages.

## package.json :

- is a config.. for npm.
- it keeps track of what version of that package is installed to our systems.

## bundlers :

- A bundler in React is a tool that combines multiple files and assets of a React application into a single or a few optimized files, known as "bundles."
- Ex: vite, parcel, etc

## parcel

- zero configuration build tool for the web
- parcel is a beast,
- it creates a
  - **dev build**,
  - **local server**,
  - **HMR** (hot module replacement) for you.
- Image Optimization
- Minification
- Compressing
- Consistent Hashing
- **Differential Bundling**
  - to support older browsers
- Error Handling
- **Tree Shaking**

  - remove unused code

- parcel using **File Watching Algorithm** (written in C++)
- uses **Caching** (Faster Build)
- It combines a great out-of-the-box development experience with a scalable architecture
- that can take your project from just getting started to massive production application.

## HMR

- feature that allows developers to update modules in a running application without requiring a full page reload,
- significantly speeding up the development process

## installing parcel :

- npm install -D parcel
- ### whats is -D here ?

  - -D denotes dev-dependencies
  - there are two types of dependencies(packages) that we install
    1. **Normal dependencies** : used in production also
    2. **Dev dependencies** : generally required in a development phase
  - after installing we get this in json file
    > "dependencies": {
    > "parcel": "^2.15.4"
    > }

  ### whats the difference between caret(^) and tilde(~)

  - <b>~</b> install the major version automatically
  - <b>^</b> install the stable (minor) version

## package-lock.json

- it will keeps track of exact version of dependencies.
- > "dependencies": {
      "parcel": "^2.15.4"
  }

## what is node_modules ?

- node_modules contains all the code that we fetched from npm.
- contains all dependenices that our project need.
- in this case it fetched all the code which is wriiten for parcel.
- huge in size.
- **node modules is like collectionn of dependencies.**

### should i post this node_module to production or git ?

- Answer is **NO**
- put node_module in .gitIgnore

## npx :

- npx means executing a package without installing it.

### npx parcel build index.html

- will give you 3 file(html, css, js) for deployment in dist folder(package)

# NOTE

- dependecies can also have dependencies called as **transitive dependencies**.
- **package.json** & **package-lock.json** should post on git, but **node_modules** & **dist** should not.
- if you want to install node_modules u just have to have package-lock.json and do **npm install** you will get **node_modules** back in your project
- whatever you can re-generate don't put on git.
- it's not good idea to inject react via **CDN** , it would be easy if you install react as a package so that it will update to version automatically.
- Explore about **browserlist** [https://browserslist.dev/]
