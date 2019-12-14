import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import {StyledMessages} from "../styles";

export const Messages = props => {
const [loggedInUser] = useState(props.login.loggedIn.userid);
console.log("props from messages",loggedInUser);
console.log("props from messages",props);
const {getMessages, userMessages} = props;
useEffect(() => {
    getMessages();
},[getMessages,userMessages.msgs]);
  return <StyledMessages>
      <h5>Messages from your matches live here.</h5>
      {userMessages.msgs.map((msg) => {
          return(<div key={msg.id}>
      <span>{msg.recipient} says:</span>
      <p>{msg.message}</p>
      <button>View chat</button>
          </div>)
      })}
  </StyledMessages>;
};

export default connect(state => state,actionCreators)(Messages);
