// import reactDom from "react-dom";
import avatar from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;

  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        {email}
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon left"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
