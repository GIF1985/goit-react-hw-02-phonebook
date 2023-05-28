import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Please enter a name and a number.');
      return;
    }

    const numberPattern = /^\d+$/;
    if (!numberPattern.test(number)) {
      alert('Please enter a valid number.');
      return;
    }

    if (name.length < 2 || name.length > 15) {
      alert('Please enter a name between 2 and 15 characters.');
      return;
    }

    const existingContact =
      contacts &&
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    if (existingContact) {
      alert('Contact already exists.');
      return;
    }

    onSubmit({ name: name.toLowerCase(), number });
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter a name"
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter a number"
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
