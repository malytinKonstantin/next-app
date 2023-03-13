export const options = Array.from({ length: 3 }).map((_, idx) => {
  const disabled = idx === 1;
  return {
    caption: `Item ${idx}${disabled ? ' (disabled)' : ''}`,
    value: '' + idx,
    disabled,
  };
});

export const mock = {
  options,
  placeholder: 'Choose something',
};
