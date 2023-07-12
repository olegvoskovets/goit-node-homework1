const fs = require("fs/promises");

const contactsOperation = async () => {
  const data = await fs.readFile("./db/contacts.json", "utf-8");

  console.log(data);
};

contactsOperation();
