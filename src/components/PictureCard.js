import React from "react";

let PictureCard = ({ image, nextUser, prevUser }) => {
  return (
    <div className="pictureCardContainer">
      <img
        className="pictureContainer"
        src={process.env.PUBLIC_URL + "/" + image}
        alt="Active User's Profile Picture"
      />
      <div className="navigationButtons">
        <div className="prevUserButton" onClick={prevUser}></div>
        <div className="nextUserButton" onClick={nextUser}></div>
      </div>
    </div>
  );
};

export default PictureCard;
