import { promises as fs } from "fs";
import * as path from "path";

// Obtenir la date actuelle
const currentDate = new Date().toISOString().split("T")[0];
const updateLine = `Last update: ${currentDate}`;

// Chemin vers le fichier README
const readmePath = path.join(process.cwd(), "README.md");

(async () => {
  try {
    // Lire le contenu actuel du README
    let readmeContent = await fs.readFile(readmePath, "utf-8");
    const lines = readmeContent.trim().split("\n");

    // Vérifier si la dernière ligne est une ligne de mise à jour
    if (lines[lines.length - 1].startsWith("Last update:")) {
      // Remplacer la dernière ligne par la nouvelle date
      lines[lines.length - 1] = updateLine;
    } else {
      // Sinon, ajouter la ligne de mise à jour à la fin
      lines.push(updateLine);
    }

    // Écrire à nouveau le README avec la date mise à jour
    await fs.writeFile(readmePath, lines.join("\n") + "\n");

    console.log("README updated successfully");
  } catch (error) {
    console.error("Error updating README:", error);
  }
})();
