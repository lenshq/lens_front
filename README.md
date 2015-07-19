# front-end part

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
