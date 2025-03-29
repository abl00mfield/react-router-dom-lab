import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";

function App() {
  //state variable for list of mailboxes created
  const [mailboxes, setMailboxes] = useState([]);

  //state variable for list of letters created
  const [letters, setLetters] = useState([]);

  //adds a new mailbox, passed down to mailbox form component
  const addBox = (mailboxData) => {
    mailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailboxData]);
  };

  //adds a new letter, passed down to letter form component
  const addLetter = (letterData) => {
    letterData._id = letters.length + 1;
    setLetters([...letters, letterData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here</h2>} />
      </Routes>
    </>
  );
}

export default App;
