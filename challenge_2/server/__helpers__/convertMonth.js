exports.convertMonth = (month) => {
  if (month >= 1 && month < 10) {
    month = `0${month}`;
  }
  if (month === 0) {
    month = 12;
  }
  if (month === -1) {
    month = 11;
  }
  return month;
}