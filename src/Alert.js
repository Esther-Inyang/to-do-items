import React, { useEffect } from "react";
import "./index.css";

function Alert({ msg, status, removeAlert, items }) {
  useEffect(() => {
    const removeAlertTimer = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(removeAlertTimer);
  }, [items, removeAlert]);

  return <p className={`alert alert-${status}`}>{msg}</p>;
}

export default Alert;
