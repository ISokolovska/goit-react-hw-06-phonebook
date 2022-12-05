import PropTypes from 'prop-types';
import { Button } from '../ContactsForm/Styled';
import { Contact } from './Styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contacts-list">
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact>
              {contact.name}: {contact.number}
            </Contact>
            <Button type="submit" onClick={() => deleteContact(contact.id)}>
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
