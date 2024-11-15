import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();

    allContacts.splice(allContacts.length - 1, 1);

    await writeContacts(allContacts);

    console.log('Last contact was removed succesfully');

    return;
  } catch (error) {
    console.error('Something went wrong:', error);
  }
};

removeLastContact();
