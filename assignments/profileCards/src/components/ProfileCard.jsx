import React from 'react'
// import './profilecard.css'

function ProfileCard(props) {

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
            <p>{prof.description}</p>
          </div>
        ))}
        <p>hi {props.name1} </p>
        <p>age ={ props.age}</p>
      </div>
    );
}

export default ProfileCard