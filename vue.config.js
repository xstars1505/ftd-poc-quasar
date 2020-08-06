const webpack = require("webpack");

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "manual",
      rtlSupport: true
    },
    i18n: {
      locale: "ja",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: () => {
    const mode = process.env.NODE_ENV || "development";
    let config;
    try {
      config = require(`./environment-configs.${mode}.json`);
    } catch (e) {
      config = require(`./environment-configs.example.json`);
    }
    const environmentVariables = Object.keys(config).reduce(
      (destination, key) => {
        destination[key.toUpperCase()] = `'${config[key]}'`;
        return destination;
      },
      {}
    );
    return {
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            ...environmentVariables
            // Other variables if needed
          }
        })
      ]
    };
  },
  transpileDependencies: ["quasar"]
};
