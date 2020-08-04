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
  transpileDependencies: ["quasar"]
};
