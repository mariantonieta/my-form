import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "5px",
    fontSize: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;