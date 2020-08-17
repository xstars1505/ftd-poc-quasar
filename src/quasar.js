import Vue from 'vue';

import './styles/quasar.scss';
import lang from 'quasar/lang/ja.js';
import '@quasar/extras/material-icons/material-icons.css';
import {
  ClosePopup,
  QBtn,
  QBtnDropdown,
  QCard,
  QCardActions,
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
  QScrollArea,
  QSelect,
  QSeparator,
  QToolbar,
  QToolbarTitle,
  Quasar,
  Ripple
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QBtnDropdown,
    QCard,
    QCheckbox,
    QCardSection,
    QCardActions,
    QForm,
    QScrollArea,
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
    QSeparator,
    QItemSection,
    QSelect,
    QItemLabel
  },
  directives: { ClosePopup, Ripple },
  plugins: {},
  frameworks: {
    cssAddon: true
  },
  lang: lang
});
