
import './App.css'
import ProfileCard from './components/ProfileCard'
import './Profilecard.css'

function App() {

  return (
    <div className="card-container">
    <ProfileCard
        name="Alan Mathew"
        img="./src/assets/images/tom.jpeg"
        description="Passionate about MERN stack development and problem solving."
      />
      <ProfileCard
        name="Sarah Johnson"
        img="./src/assets/images/girl.jpeg"
        description="Designs user-friendly interfaces with creative solutions."
      />
      <ProfileCard
        name="Michael Smith"
        img="./src/assets/images/3.jpg.jpg"
        description="Loves working with machine learning and big data."
      />
        <ProfileCard
        name="Levi Ackerman"
        img="./src/assets/images/levi.jpeg"
        description="Passionate about MERN stack development and problem solving."
      />
      </div>
  )
}

export default App
