// import reactDom from "react-dom";
import avatar from "../images/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contacts;

  return (
    <div className="item">
      <img class="ui avatar image" src={avatar} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        {email}
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon left"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
