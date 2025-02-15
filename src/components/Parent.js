import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // Data for both questions
  const questions = [
    {
      id: 1,
      title: "Who has the best fries?",
      images: ["/assets/mcdonalds.png", "/assets/chickfila.png", "/assets/wendys.png", "/assets/popeyes.png"],
    },
    {
      id: 2,
      title: "Which console is better?",
      images: ["/assets/nintendo.png", "/assets/playstation.png", "/assets/xbox.png"],
    },
  ];

  // State to track which image is displayed for each question
  const [imageIndexes, setImageIndexes] = useState([0, 0]);

  // Function to change image when button is clicked
  const updateImage = (id) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[id] = (newIndexes[id] + 1) % questions[id].images.length; // Cycle images
      return newIndexes;
    });
  };

  return (
    <div>
      <h1>Parents & Children Quiz</h1>
      {questions.map((question, index) => (
        <Child
          key={question.id}
          id={index}
          title={question.title}
          image={question.images[imageIndexes[index]]}
          onChange={updateImage}
        />
      ))}
    </div>
  );
};

export default Parent;

