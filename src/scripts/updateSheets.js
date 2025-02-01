import fs from 'fs';
import { updateGoogleSheets } from '../src/lib/googleSheets';
import { fetchData } from '../src/lib/fetchData';

const projects = JSON.parse(fs.readFileSync('./src/config/projects.json', 'utf8'));

(async () => {
  for (const project of projects.projects) {
    const data = await fetchData(project.wallet_address);
    await updateGoogleSheets(project.project_id, data);
  }
})();