import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../Redux/DialogsReducer";

const Dialogs = (props) => {
  const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

  const Message = (props) => {
    return <div>{props.message}</div>;
  };

  let state = props.store.getState().messagesPage;

  let dialogselements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageselements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newwMessageseBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className="contentDiologov">
      <div className="dialogs">
        <div className="dialog" activeclassname="active">
          {dialogselements}
        </div>
      </div>
      <div className="mess">
        <div className="messages">{messageselements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newwMessageseBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dialogs };
