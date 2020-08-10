import Vue from 'vue';

import './styles/quasar.scss';
import lang from 'quasar/lang/ja.js';
import '@quasar/extras/material-icons/material-icons.css';
import {
  ClosePopup,
  QBtn,
  QBtnDropdown,
  QCard,
  QCardSection,
  QCheckbox,
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
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QBtnDropdown,
    QCard,
    QCheckbox,
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
  directives: { ClosePopup },
  plugins: {},
  frameworks: {
    cssAddon: true
  },
  lang: lang
});
