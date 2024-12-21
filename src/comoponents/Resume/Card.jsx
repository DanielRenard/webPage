import React from "react";

const Card = ({ title, items }) => {
  return (
    <div
      style={{
        width: "260px",
        height: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "16px",  
      }}
    >
      <h2 style={{ fontSize: "18px", margin: "0 0 16px 0" }}>{title}</h2>
      <ul style={{ paddingLeft: "20px", margin: "0" }}>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: "14px", marginBottom: "8px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
