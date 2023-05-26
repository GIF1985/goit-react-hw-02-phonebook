import React from 'react';
import styles from './ContactListItemWithDelete.module.css';

const ContactListItemWithDelete = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li className={styles.contactListItem} key={contact.id}>
      <span className={styles.name}>{contact.name}:</span> {contact.number}
      <button
        className={styles.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItemWithDelete;
