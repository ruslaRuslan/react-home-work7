import "./index.css"
const ContactBody = ({}) => {
  return (
    <div className="divInputs">
      <input style={{paddingBottom: "5px", width: "500px"}} type="text" placeholder="name" />
      <input style={{paddingBottom: "5px", width: "500px"}} type="text" placeholder="email" />
      <input style={{paddingBottom: "350px ", width: "500px"}} type="text" placeholder="message..." />
      <button>send</button>
    </div>
  );
};

export default ContactBody;

