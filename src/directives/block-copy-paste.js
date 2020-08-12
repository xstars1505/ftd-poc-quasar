import Vue from 'vue';

Vue.directive('BlockCopyPaste', el => {
  el.addEventListener('copy', event => {
    event.preventDefault();
  });
  el.addEventListener('cut', event => {
    event.preventDefault();
  });
  el.addEventListener('paste', event => {
    event.preventDefault();
  });
});
