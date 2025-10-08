import React from 'react'
// import './profilecard.css'

function ProfileCard() {

    let profiles = [
      {
        id: 1,
        name: "Alan Mathew",
        img: "./src/assets/images/tom.jpeg",
        description:
          "Passionate about MERN stack development and problem solving.",
      },
      {
        id: 1,
        name: "Alan Mathew",
        img: "./src/assets/images/tom.jpeg",
        description:
          "Passionate about MERN stack development and problem solving.",
      },
      {
        id: 1,
        name: "Alan Mathew",
        img: "./src/assets/images/tom.jpeg",
        description:
          "Passionate about MERN stack development and problem solving.",
      },
    ];
    return (
      <div>
        {profiles.map((prof) => (
          <div>
            <h1>{prof.name}</h1>
            <img src={prof.img} alt="" />
          </div>
        ))}
      </div>
    );
}

export default ProfileCard