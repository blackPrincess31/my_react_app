import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

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

const Dialogs = (props) => {
  let dialogselements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageselements = props.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className="contentDiologov">
      <div className="dialogs">
        <div className="dialog" activeClassName="active">
          {dialogselements}
        </div>
      </div>
      <div className="mess">
        <div className="messages">{messageselements}</div>
      </div>
    </div>
  );
};

export { Dialogs };
