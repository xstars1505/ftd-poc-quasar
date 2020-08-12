import Vue from 'vue';
import StringUtils from '@/utils/string';
import DOMUtils from '@/utils/dom';

Vue.directive('LimitFullHalfWidth', {
  bind: function(el, binding, vnode) {
    const { fullSizeLength, halfSizeLength } = binding.value;
    const modelExp = vnode.data.model.expression;
    let unwatch = vnode.context.$watch(
      modelExp,
      function(newValue) {
        const inputElement = DOMUtils.queryInputElementInside(el);
        inputElement.value = handleLimitation(
          newValue,
          fullSizeLength,
          halfSizeLength
        );
        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
      },
      { deep: true }
    );
    if (!vnode.context['unwatch']) {
      vnode.context['unwatch'] = unwatch;
    }
  },
  unbind(el, binding, vnode) {
    vnode.context.unwatch();
  }
});

function handleLimitation(value, fullSizeLength, halfSizeLength) {
  if (StringUtils.isFullWidth(value)) {
    if (value && value.toString().length >= fullSizeLength) {
      value = value.toString().substr(0, fullSizeLength);
    }
  } else {
    if (
      value &&
      value.toString().length >= (halfSizeLength || fullSizeLength * 2)
    ) {
      value = value.toString().substr(0, halfSizeLength || fullSizeLength * 2);
    }
  }
  return value;
}
