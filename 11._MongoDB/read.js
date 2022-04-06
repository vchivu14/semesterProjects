import db from "./createConnection.js";

const allTutorials = await db.videos.find("tutorials");
console.log(allTutorials);