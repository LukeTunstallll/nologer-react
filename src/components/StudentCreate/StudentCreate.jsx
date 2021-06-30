import React from "react";
import styles from "./StudentCreate.module.scss";

const StudentCreate = () => {
  return (
    <>
      <p>StudentCreate works</p>
      {/* const requestBody = {
            "firstName": e.target[0].value,
            "lastName": e.target[1].value,
            "age": e.target[2].value,
            "location": e.target[3].value,
            "interests": []
        };
        console.log(requestBody)

        // 3. Ssend it!!
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };
        fetch('http://localhost:8080/student', options).then((response) => {
            return response.json();
        }).then((data) => {
             // 4. Show some indication that it's been sent/successful
             alert("Created a new user, yay!!")
        }); */}
    </>
  );
};

export default StudentCreate;
