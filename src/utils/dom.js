function queryInputElementInside(el) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
}

export default {
  queryInputElementInside
};
