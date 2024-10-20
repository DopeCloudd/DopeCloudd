const { promises: fs } = require('fs');
const readme = require('./readme');

const today = new Date();

function generateNewREADME() {
  const readmeRow = readme.split('\n');

  // Remplace la dernière ligne par la date actuelle
  readmeRow[readmeRow.length - 1] = getTodayDate();

  return readmeRow.join('\n');
}

function getTodayDate() {
  return `Last update: ${today.toDateString()}`;
}

const updateREADMEFile = (text) => fs.writeFile('./README.md', text);

async function main() {
  const newREADME = generateNewREADME();
  console.log(newREADME);
  await updateREADMEFile(newREADME);
}

main()
