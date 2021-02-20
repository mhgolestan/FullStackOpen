import React from "react";

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null;
  } else {
    return <div className="error-notif-class">{message}</div>;
  }
};

export default ErrorNotification;
