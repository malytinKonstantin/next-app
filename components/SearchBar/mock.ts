const delay = (ms: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const search = async () => {
  await delay(300);
};

export const mock = {
  search,
};
