import React from "react";
import Card from "./Card"; 
import resumeData from "./Data"; 

const ResumeTab = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {resumeData.map((cardData, index) => (
        <Card key={index} title={cardData.title} items={cardData.items} />
      ))}
    </div>
  );
};

export default ResumeTab;