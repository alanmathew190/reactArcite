import Greeting1 from "./Greeting1";
// import Greeting1 from './components/Greeting1';

function Greeting({name}) {
    // let name = "Alan"
    
    return(
        <>
            {/* <h1>Hello {props.name}</h1>
            <p>{props.age } years old</p> */}
            <Greeting1 name={name} />
        </>
    )
    
}


export default Greeting;