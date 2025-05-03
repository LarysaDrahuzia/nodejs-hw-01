import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
    }
    console.log('There are no contacts to delete.');
  } catch (error) {
    console.error('Contact deletion error: ', error);
  }
};

removeLastContact();
