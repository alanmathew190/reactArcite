import React, { useState } from 'react'

function EventHandling() {
    let [name, setName] = useState();

    let handleChange = (e) => {
        console.log(e)
        setName(e.target.value)
    }
  return (
      <>
          <form action="">
              <input placeholder='Enter your name' type="text" value={name} onChange={handleChange} />
              <p>{ name}</p>
      </form>
      </>
  )
}

export default EventHandling