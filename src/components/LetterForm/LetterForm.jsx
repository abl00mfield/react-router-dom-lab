import { useNavigate } from "react-router";
import { useState } from "react";

const initialState = {
  _id: 0,
  mailboxId: 1, //when there is only 1 mailbox, value needs to be 1 for select to work
  recipient: "",
  message: "",
};

const LetterForm = (props) => {
  const [letterData, setLetterData] = useState(initialState);
  const navigate = useNavigate();

  //updates state of letter variable and redirects to mailbox letter was sent to
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addLetter(letterData);
    setLetterData(initialState);
    navigate(`/mailboxes/${letterData.mailboxId}`);
  };

  //continously updates form data as it is being entered
  const handleChange = ({ target }) => {
    setLetterData({ ...letterData, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <select
          name="mailboxId"
          id="mailboxId"
          required
          value={letterData.mailboxId}
          onChange={handleChange}
        >
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient: </label>
        <input
          onChange={handleChange}
          type="text"
          name="recipient"
          id="recipient"
          value={letterData.recipient}
        />
        <label htmlFor="message">Message: </label>
        <textarea
          onChange={handleChange}
          name="message"
          id="message"
          defaultValue={letterData.message}
        ></textarea>
        <button type="submit">Send Letter</button>
      </form>
    </>
  );
};
export default LetterForm;
