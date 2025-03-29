import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import LetterForm from "./components/LetterForm/LetterForm";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (mailboxData) => {
    mailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailboxData]);
  };

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
