import React, { useEffect } from "react";
import "./index.css";

function Alert({ msg, status, removeAlert }) {
  useEffect(() => {
    const removeAlertTimer = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(removeAlertTimer);
  }, [removeAlert]);

  return <p className={`alert alert-${status}`}>{msg}</p>;
}

export default Alert;
