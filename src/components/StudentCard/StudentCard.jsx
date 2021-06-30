import React from "react";
import styles from "./StudentCard.module.scss";

const StudentCard = () => {
  return (
    <>
      <p>
        {firstName}
        {lastName}
      </p>
      <p>{interests}</p>
      <p>{location}</p>
    </>
  );
};

export default StudentCard;
