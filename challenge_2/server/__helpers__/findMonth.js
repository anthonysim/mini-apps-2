exports.findMonth = (obj, firstdate, secondDate, thirdDate) => {
  let results = {};

  for (let key in obj) {
    if (key === firstdate
      || key === secondDate
      || key === thirdDate) {
      results[key] = obj[key];
    }
  }
  return results;
}