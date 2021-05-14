const contacts = require('./contacts')
const argv = require('yargs').argv;
const {Command} = require("commander")


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
   contacts.listContacts().then(data => console.log(data));
      break;

    case 'get':
    contacts.getContactById(id).then(data => console.log(data))
      break;

    case 'add':
      contacts.addContact(name, email, phone).then(data => console.log(data))
      break;

    case 'remove':
     contacts.removeContact(id).then(data => console.log(data))
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
 

