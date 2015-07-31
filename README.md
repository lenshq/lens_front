[![Floobits Status](https://floobits.com/vyorkin/lenshq.svg)](https://floobits.com/vyorkin/lenshq/redirect)

# lenshq web client

![LensHQ](http://puu.sh/j955F/d2bf0077be.png "LensHQ – profiling tool for Rails apps.")

# setup

There is a `config` section in `package.json`:

```
"config": {
  "appName": "Lens",
  "https": false,
  "host": "localhost",
  "port": 3001,
  "openInBrowser": false,
  "sourceMap": true,
  "apiRoot": "http://localhost:8088/api/v1"
}
```

* `openInBrowser` ­ set to `true` if you want to open your app in browser when running `npm start`
* `sourceMap` ­ enable source maps (works only for development env)

# directory layout

```
.
├── /build/                                # The folder for compiled output
├── /docs/                                 # Documentation files for the project
├── /config/                               # Build configuration files
├── /gulp/                                 # Gulp tasks
├── /node_modules/                         # 3rd-party libraries and utilities
├── /src/                                  # The source code and resources of the application
│   ├── /assets/                           # Static files which are copied to ./build on compile
│   ├── /fonts/                            # Additional fonts that used in project
│   ├── /scripts/                          # Application scripts
│   │   ├── /actions/                      # Action creators that allow to trigger a dispatch to stores
│   │   ├── /api/                          # REST API / Relay endpoints
│   │   ├── /components/                   # React components
│   │   ├── /decorators/                   # Decorators for various needs
│   │   ├── /forms/                        # React components representing forms
│   │   ├── /layouts/                      # Application layouts
│   │   ├── /lib/                          # App-specific code, utility classes and functions
│   │   ├── /pages/                        # React components representing "pages" in SPA
│   │   ├── /routes/                       # Routing configuration files
│   │   ├── /spec/                         # Setup for jest testing lib
│   │   │   └── /support/                  # Helpers & utilies for testing
│   │   │       └── /jestPreprocessor.js   # ES2015 transpilation & webpack integration settings for jest
│   │   │       └── /stubRouterContext.js  # Helper to stub react-router
│   │   ├── /stores/                       # Stores contain the application state and logic
│   │   ├── /widets/                       # React widget components
│   │   └── /main.js                       # Applicaton entry point
│   ├── /styles/                           # Additional fonts that used in project
│   └── /templates/                        # Templates for server-side rendering
├── /webpack/                              # Webpack configuration files
│   ├── /common.config.js                  # Common build settings for webpack
│   ├── /development.config.js             # Webpack settings to be applied only for development env
│   └── /production.config.js              # Production webpack settings
│── gulpfile.babel.js                      # Configuration file for automated builds
│── browserlist                            # The list of supporter browsers for autoprefixer
│── config.js                              # The main configuration file
│── package.json                           # The list of 3rd party libraries and utilities
│── preprocessor.js                        # ES6 transpiler settings for Jest
└── webpack.config.js                      # Webpack configuration for bundling and optimization
```

# npm tasks

to install dependencies:
```
npm install
```

to run development server:
```
npm start
```

to build for production env:
```
npm run build
```

to run tests:
```
npm test
```

# resources

* [redux devtools](https://github.com/gaearon/redux-devtools)
