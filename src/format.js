const format = {
  number(value) {
    return new Intl.NumberFormat().format(value);
  },
};

export default format;
