import { useParams } from "react-router";

const MailboxDetails = (props) => {
  // if (props.mailboxes.length === 0) return <h1>No mailbox Found</h1>;
  const { mailboxId } = useParams();

  const selectedLetters = props.letters.filter(
    (letter) => parseInt(letter.mailboxId) === parseInt(mailboxId)
  );

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
              <div key={letter._id}>
                <p>Dear {letter.recipient},</p>
                <p>{letter.message}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default MailboxDetails;
