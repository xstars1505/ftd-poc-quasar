import Vue from 'vue';
import DOMUtils from '@/utils/dom';
import StringUtils from '@/utils/string';

Vue.directive('DecimalNumber', {
  bind(el, binding, vnode) {
    const { upperLimit, lowerLimit } = binding.value;
    const precision = binding.value.decimal || 2;
    const modelExp = vnode.data.model.expression;
    const inputElement = DOMUtils.queryInputElementInside(el);

    let unwatch = vnode.context.$watch(
      modelExp,
      function(newValue, oldValue) {
        const regex = new RegExp('(\\.[\\d]{' + precision + '}).', 'g');
        const valueNext = StringUtils.fullWidthNumConvert(newValue);
        inputElement.value =
          newValue &&
          valueNext
            .toString()
            .replace(/^(-)?0+(?=\d)/, '$1')
            .replace(/[^\d.]/g, '')
            .replace(/(\..*)\./g, '$1')
            .replace(regex, '$1');
        if (isNaN(inputElement.value)) {
          inputElement.value = oldValue;
        }
        if (upperLimit !== undefined && inputElement.value > upperLimit) {
          inputElement.value = upperLimit;
        }
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
      },
      { deep: true }
    );

    if (!vnode.context['unwatch']) {
      vnode.context['unwatch'] = unwatch;
    }

    inputElement.addEventListener('blur', () => {
      if (lowerLimit !== null && lowerLimit !== undefined) {
        setTimeout(() => {
          if (inputElement.value <= lowerLimit) {
            inputElement.value = lowerLimit;
            inputElement.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }, 20);
      }
    });
  },
  unbind(el, binding, vnode) {
    vnode.context.unwatch();
    const inputElement = DOMUtils.queryInputElementInside(el);
    inputElement.removeEventListener('blur', {});
  }
});
