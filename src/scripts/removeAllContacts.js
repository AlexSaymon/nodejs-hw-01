import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const clearContacts = [];

  const result = await writeContacts(clearContacts);

  console.log('All contacts were removed');

  return result;
};

removeAllContacts();
