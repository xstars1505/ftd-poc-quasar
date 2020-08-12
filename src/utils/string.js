function isFullWidth(value) {
  if (value) {
    const actual_len = value.length;
    const str_len = countLength(value);
    return parseInt(actual_len, 10) * 2 === str_len;
  }
}

function countLength(str) {
  let r = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    // Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
    // Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
    if (
      (c >= 0x0 && c < 0x81) ||
      c === 0xf8f0 ||
      (c >= 0xff61 && c < 0xffa0) ||
      (c >= 0xf8f1 && c < 0xf8f4)
    ) {
      r += 1;
    } else {
      r += 2;
    }
  }
  return r;
}

function fullWidthNumConvert(fullWidthNum) {
  if (fullWidthNum) {
    return fullWidthNum
      .toString()
      .replace(/[\uFF10-\uFF19\uFF0D．。]/g, function(m) {
        return String.fromCharCode(m.charCodeAt(0) - 0xfee0);
      });
  }
  return null;
}

function inputNumberProcessing(value, maxValue, minValue = 0) {
  if (value) {
    const strRegex = /[^0-9０-９]+/gm;
    const trimValue = value.toString().replace(strRegex, '');
    const inputValue = fullWidthNumConvert(trimValue);
    const min = minValue ? Math.max(+inputValue, +minValue) : +inputValue;
    const max = maxValue !== undefined ? Math.min(min, +maxValue) : min;
    return inputValue ? +max : '';
  }
  return '';
}

export default {
  isFullWidth,
  fullWidthNumConvert,
  inputNumberProcessing
};
