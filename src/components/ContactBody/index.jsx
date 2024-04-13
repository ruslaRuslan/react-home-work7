import "./index.css"
const ContactBody = ({}) => {
  return (
    <div className="divInputs">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input className="inputMessage" style={{paddingBottom: "350px ", width: "500px"}} type="text" placeholder="message..." />
      <button>send</button>
    </div>
  );
};

export default ContactBody;

