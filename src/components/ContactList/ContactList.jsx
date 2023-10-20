import css from './ContactList.module.css';

const ContactList = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div className={css.contact}>
      <li className={css.info}>
        {name}: {number}
      </li>
      <button
        onClick={() => handleDeleteContact(id)}
        className={css.btnContactDelete}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
export default ContactList;
