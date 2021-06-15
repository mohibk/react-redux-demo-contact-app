const Contact = (props) => {
  const { firstName, lastName, phone, id, handleDeleteContact } = props;

  const handleClick = (e) => {
    e.preventDefault();
    handleDeleteContact(id);
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <a href="/#" onClick={handleClick}>
          Remove
        </a>
      </td>
    </tr>
  );
};

export default Contact;
