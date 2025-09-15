import React from 'react'
// import './profilecard.css'

function ProfileCard({name,img,description}) {
    return (
    
            <div className="profile_card">
                <img src={img} alt={name} />
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            
  )
}

export default ProfileCard