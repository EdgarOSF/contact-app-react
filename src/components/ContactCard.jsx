// import reactDom from "react-dom";
import avatar from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contacts;

  return (
    <div className="item">
      <img className="ui avatar image" src={avatar} alt="user"></img>
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { contact: props.contacts },
          }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon left"
          style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
          onClick={() => props.clickHandler(id)}></i>
        <Link  to={{
            pathname: `/edit/${id}`,
            state: { contact: props.contacts },
          }}>
          <i
            className="edit alternate outline icon left"
            style={{ color: 'blue', marginTop: '7px' }}
            ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
