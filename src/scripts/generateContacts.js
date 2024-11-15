import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();

  const newContacts = Array(number).fill().map(createFakeContact);

  const updatedContacts = [...existingContacts, ...newContacts];

  await writeContacts(updatedContacts);

  console.log(`${number} contacts were added`);
};

generateContacts(5);
