import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Messages = props => {
const [loggedInUser] = useState(props.login.loggedIn.userid);
console.log("props from messages",loggedInUser);
console.log("props from messages",props);
const {getMessages, userMessages} = props;
useEffect(() => {
    getMessages();
},[getMessages,userMessages.msgs]);
  return <div>
      {userMessages.msgs.map((msg) => {
          return(<div key={msg.id}>
      <p>{msg.message}</p>
          </div>)
      })}
  </div>;
};

export default connect(state => state,actionCreators)(Messages);
