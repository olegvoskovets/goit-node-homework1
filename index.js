const {
  listContacts,
  getContactById,
  addContact,
  updateContactId,
  removeContact,
} = require("./contacts.js");

const { program } = require("commander");

program
  .option("--action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--tweets <type>")
  .option("--followers <type>")
  .option("--avatar <type>");

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

// incoveAction({ action: "list" });
// incoveAction({ action: "get", id: "3" });

// incoveAction({
//   action: "add",
//   name: "Djon Liscko",
//   tweets: 305,
//   followers: 100000,
//   avatar: "./images/user13.png",
// });

// incoveAction({
//   action: "update",
//   name: "Djon",
//   tweets: 5,
//   followers: 1,
//   avatar: "./images/user1.png",
//   id: "1",
// });

// incoveAction({
//   action: "remove",
//   id: "4qVwSOOE5Pwx57UWguzzF",
// });
