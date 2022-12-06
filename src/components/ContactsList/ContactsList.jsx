import PropTypes from 'prop-types';
import { Button } from '../ContactsForm/Styled';
import { Contact, ContactsWrapper } from './Styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsWrapper className="contacts-list">
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <Button type="submit" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </Button>
          </li>
        );
      })}
    </ContactsWrapper>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
