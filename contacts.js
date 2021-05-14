const fs = require('fs').promises
const path = require('path')
const {v4} = require("uuid")

const contactsPath = path.join(__dirname, '/db', "contacts.json")

const writeContacts = (contacts) => {
    const data = JSON.stringify(contacts)
    fs.writeFile(contactsPath, data)  
}

const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath)
        const contacts = JSON.parse(data)
return contacts
    }
    catch(error) {
        error.message = "oops"
        throw error;
    }
   
}
 


  
const getContactById = async (contactId)=> {
    try {
        const contacts = await listContacts()
        const contact = contacts.find(({id}) => id === contactId)
        return contact
    }
    catch(error) {
        throw error;
    }
  }


  
const removeContact = async (contactId) => {
    try {
        const contacts = await listContacts()
        const newContacts = contacts.filter(({id}) => id !== contactId)
        writeContacts(newContacts)
        return newContacts
    }
    catch(error) {
        throw error;
    }
  }
  
 


  const addContact = async (name, email, phone) => {
    try {
        const contacts = await listContacts()
        newContact = {
            id:  v4(),
            name,
            email,
            phone 
           }
        contacts.push(newContact)
        writeContacts(contacts)
        return contacts
    }
    catch(error) {
        throw error;
    }
  }




module.exports= {
    listContacts,
    getContactById,
    removeContact,
    addContact
}