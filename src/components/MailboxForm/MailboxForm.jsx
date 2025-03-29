import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  _id: 0,
  boxHolder: "",
  boxSize: "small",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return <main>Hello</main>;
};

export default MailboxForm;
