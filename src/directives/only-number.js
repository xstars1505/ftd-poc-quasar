import Vue from 'vue';
import DOMUtils from '@/utils/dom';
import StringUtils from '@/utils/string';

Vue.directive('OnlyNumber', {
  bind(el, binding, vnode) {
    const { upperLimit, lowerLimit, allowEmpty } = binding.value;
    const modelExp = vnode.data.model.expression;
    const inputElement = DOMUtils.queryInputElementInside(el);

    let unwatch = vnode.context.$watch(
      modelExp,
      function(newValue) {
        if (upperLimit !== undefined && upperLimit === lowerLimit) {
          inputElement.value = upperLimit;
          inputElement.dispatchEvent(new Event('input', { bubbles: true }));
          return;
        }

        let valueNext = StringUtils.fullWidthNumConvert(newValue);
        if (valueNext) {
          valueNext = valueNext
            .replace(/^(-)?0+(?=\d)/, '$1')
            .replace(/[^\d]/g, '');
        }
        inputElement.value = StringUtils.inputNumberProcessing(
          valueNext,
          upperLimit
        );
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
      },
      { deep: true }
    );

    if (!vnode.context['unwatch']) {
      vnode.context['unwatch'] = unwatch;
    }

    inputElement.addEventListener('blur', () => {
      setTimeout(() => {
        if (
          allowEmpty &&
          (inputElement.value === '' || inputElement.value === null)
        ) {
          return;
        }
        if (inputElement.value <= lowerLimit) {
          inputElement.value = lowerLimit;
          inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    });
  },
  unbind(el, binding, vnode) {
    vnode.context.unwatch();
    const inputElement = DOMUtils.queryInputElementInside(el);
    inputElement.removeEventListener('blur', {});
  }
});
