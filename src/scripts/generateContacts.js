import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
