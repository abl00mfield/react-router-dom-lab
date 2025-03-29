import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  _id: 0,
  boxHolder: "",
  boxSize: "small",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Mailbox List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder: </label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size</label>
        <select
          name="boxSize"
          id="boxSize"
          required
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
