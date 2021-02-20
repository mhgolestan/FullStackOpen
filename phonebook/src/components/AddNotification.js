import React from "react";

const AddNotification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    return <div className="add-notif-class">{message}</div>;
  }
};

export default AddNotification;
