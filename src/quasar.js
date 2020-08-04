import Vue from "vue";

import "./styles/quasar.scss";
import lang from "quasar/lang/ja.js";
import "@quasar/extras/material-icons/material-icons.css";
import {
  QBtn,
  QCard,
  QCardSection,
  QDrawer,
  QForm,
  QHeader,
  QIcon,
  QInput,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QPage,
  QPageContainer,
  QSelect,
  QToolbar,
  QToolbarTitle,
  Quasar
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QCard,
    QCardSection,
    QForm,
    QHeader,
    QInput,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QSelect,
    QItemLabel
  },
  directives: {},
  plugins: {},
  frameworks: {
    cssAddon: true
  },
  lang: lang
});
