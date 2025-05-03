import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, undefined, 2),
      'utf-8',
    );
    return true;
  } catch (error) {
    console.error('File writing error: ', error);
  }
};
