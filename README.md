# ftd-poc

## Project setup
```
yarn install
```
Then create a config file named `environment-configs.development.json` for your local environment by copying the content inside `environment-configs.example.json`, then make some changes if needed

### Compiles and hot-reloads for development
```
yarn serve
```
####Note:
* This will load all the environment variables in `environment-configs.development.json`
* If you want to run with QA or Staging mode on your local machine, either change the content of `environment-configs.development.json` with corresponding configs or create another `environment-configs.[mode].json`, then run `env NODE_ENV=[mode] yarn serve`

### Compiles and minifies for production
```
yarn build
```
####Note:
* If you want to build with QA or Staging mode on your local machine, either change the content of `environment-configs.development.json` with corresponding configs or create another `environment-configs.[mode].json`, then run `env NODE_ENV=[mode] yarn build`

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
