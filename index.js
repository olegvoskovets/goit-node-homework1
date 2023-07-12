const {
  listContacts,
  getContactById,
  addContact,
  updateContactId,
  removeContact,
} = require("./contacts.js");

const { program } = require("commander");

program
  .option("-a,--action <type>")
  .option("-i,--id <type>")
  .option("-n,--name <type>")
  .option("-t,--tweets <type>")
  .option("-f,--followers <type>")
  .option("-av,--avatar <type>");

program.parse(process.argv);
const argv = program.opts();

const incoveAction = async ({
  action,
  id,
  name,
  tweets,
  followers,
  avatar,
}) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const contact = await getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await addContact({ name, tweets, followers, avatar });
      return console.log(newContact);

    case "update":
      const updateContact = await updateContactId(id, {
        name,
        tweets,
        followers,
        avatar,
      });
      return console.log(updateContact);

    case "remove":
      const removeCont = await removeContact(id);
      return console.log(removeCont);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

incoveAction(argv);
