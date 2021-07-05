import avatar from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    // console.log(props.location.state.contact);
    return (
      <div className="container">
        <div className="ui card">
          <div className="image">
            <img src={avatar} alt="user" />
          </div>
          <div className="content">
            <a className="header">{name}</a>
            <div className="description">{email}</div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
        <div className="center-div">
        <Link to="/">
            <button className="ui button blue center">Back to Contact List</button>
        </Link>
        </div>
      </div>
    );
}

export default ContactDetail;