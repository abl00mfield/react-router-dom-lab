import { useParams } from "react-router";

const MailboxDetails = (props) => {
  // if (props.mailboxes.length === 0) return <h1>No mailbox Found</h1>;
  const { mailboxId } = useParams();
  console.log("letters:", props.letters);
  console.log("mailboxid: ", mailboxId);
  const selectedLetters = props.letters.filter(
    (letter) => parseInt(letter.mailboxId) === parseInt(mailboxId)
  );
  console.log("selected letters: ", selectedLetters);

  const mailbox = props.mailboxes.find(
    (box) => box._id === parseInt(mailboxId)
  );

  if (!mailbox || props.mailboxes.length === 0)
    return <h1>No mailbox Found</h1>;
  return (
    <>
      <h1>Mailbox {mailbox._id}</h1>
      <div className="mail-box">
        <h2>Details</h2>
        <p>Boxholder: {mailbox.boxHolder}</p>
        <p>Box Size: {mailbox.boxSize}</p>
        <h2>Letters</h2>
        {selectedLetters.length === 0 ? (
          <p>No letters</p>
        ) : (
          selectedLetters.map((letter) => {
            return (
              <p key={letter._id}>
                Dear {letter.recipient},<p>{letter.message}</p>
              </p>
            );
          })
        )}
      </div>
    </>
  );
};

export default MailboxDetails;
