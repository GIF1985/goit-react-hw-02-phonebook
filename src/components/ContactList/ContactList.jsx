import React from 'react';
import ContactListItemWithDelete from '../ContactListItemWithDelete/ContactListItemWithDelete';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItemWithDelete
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
          className={styles.contactListItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
