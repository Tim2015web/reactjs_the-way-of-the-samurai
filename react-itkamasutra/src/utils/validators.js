export function required(value) {
  return value ? undefined : 'Field is required';
}

export function maxLengthCreator(maxLength) {
  return function (value) {
    return value.length > maxLength ? `Max length is ${maxLength}` : undefined;
  };
}