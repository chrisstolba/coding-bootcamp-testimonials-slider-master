import React from "react";
import { useState } from "react";
import "./css/reset.css";
import "./css/main.css";

import QuoteCard from "./components/QuoteCard";
import PictureCard from "./components/PictureCard";

let App = () => {
  let users = [
    {
      name: "Tanya Sinclair",
      image: "image-tanya.jpg",
      title: "UX Engineer",
      quote:
        "I've been interested in coding for a while but never taken to jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    },
    {
      name: "John Tarkpor",
      image: "image-john.jpg",
      title: "Junior Front-end Developer",
      quote:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the isntructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
  ];

  let [userIndex, setUserIndex] = useState(0);

  let nextUser = () =>
    setUserIndex(userIndex >= users.length - 1 ? 0 : userIndex + 1);

  let prevUser = () =>
    setUserIndex(userIndex <= 0 ? users.length - 1 : userIndex - 1);

  return (
    <div className="App">
      <QuoteCard
        quote={users[userIndex].quote}
        name={users[userIndex].name}
        title={users[userIndex].title}
      />
      <PictureCard
        image={users[userIndex].image}
        nextUser={nextUser}
        prevUser={prevUser}
      />
    </div>
  );
};

export default App;
