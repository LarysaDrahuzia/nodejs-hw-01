import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const amountContacts = contacts.length;
  return amountContacts;
};

console.log(await countContacts());
