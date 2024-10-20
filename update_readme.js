const { promises: fs } = require("fs");

// Fonction pour obtenir la date d'aujourd'hui sous forme de chaîne
function getTodayDate() {
  const today = new Date();
  return `Last update: ${today.toDateString()}`;
}

// Fonction pour mettre à jour la dernière ligne du README
async function updateREADME() {
    // Lire le fichier README.md
    const readme = await fs.readFile("./README.md", "utf-8");

    // Diviser le contenu en lignes
    const readmeLines = readme.split("\n");

    // Modifier la dernière ligne avec la date actuelle
    readmeLines[readmeLines.length - 1] = getTodayDate();

    // Rejoindre les lignes et écrire dans le fichier
    await fs.writeFile("./README.md", readmeLines.join("\n"));
    console.log(readmeLines.join("\n")); // Affiche le contenu complet du README
}

// Appeler la fonction principale
updateREADME();
