import React from "react";

function Footer({ array }) {
  const arrlength = array.length;
  const arrpacked = array.filter((item) => item.ispacked).length;

  return (
    <div
      style={{
        backgroundColor: "rosybrown",
        height: "200px",
        textAlign: "center",
      }}
    >
      <h2 style={{ padding: "1.5rem", margin: "0" }}>
        you have {arrlength} items in your list and {arrpacked} packed items
      </h2>
    </div>
  );
}

export default Footer;
