const getRandomStudent = (students) => {
  return students[randomIntFromInterval(0, students.length - 1)];
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { getRandomStudent };
