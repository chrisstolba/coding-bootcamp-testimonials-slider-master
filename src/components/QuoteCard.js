import React from "react";

let QuoteCard = ({ quote, name, title }) => {
  return (
    <div className="quoteCardContainer">
      <div className="quoteContainer">" {quote} "</div>
      <div className="quoteNameContainer">
        <span className="quoteName">{name}</span>
        <span className="quoteTitle">{title}</span>
      </div>
    </div>
  );
};

export default QuoteCard;
