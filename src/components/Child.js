import React from "react";

const Child = ({ id, title, image, onChange }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px", margin: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>{title}</h2>
      <img src={image} alt="Option" style={{ width: "200px", height: "150px", marginBottom: "10px" }} />
      <br />
      <button onClick={() => onChange(id)}>Change</button>
    </div>
  );
};

export default Child;
