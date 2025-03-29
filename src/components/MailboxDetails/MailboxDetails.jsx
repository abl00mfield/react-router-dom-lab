import { useParams } from "react-router";

const MailboxDetails = (props) => {
  // if (props.mailboxes.length === 0) return <h1>No mailbox Found</h1>;
  const { mailboxId } = useParams();

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
      </div>
    </>
  );
};

export default MailboxDetails;
