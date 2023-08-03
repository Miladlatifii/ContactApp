import userImge from "../../../assets/images/images.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userImge} alt="user" />

        <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
          <div className="user">
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
