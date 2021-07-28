import ContactForm from './components/ContactForm/ContactForm';
import { v4 as uuidv4 } from "uuid";
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [ { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
   
  };

    addContact = (task) => {
    const searchClone = this.state.contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchClone) {
      alert(`${task.name} is already in contacts`);
    } else {
      const contact = {...task, id: uuidv4(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const displayContacts = this.getContacts();

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {displayContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {displayContacts.length > 0 && (
          <ContactList
            contacts={displayContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}

export default App;
