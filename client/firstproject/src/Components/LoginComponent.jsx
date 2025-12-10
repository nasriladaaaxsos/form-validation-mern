import React,{useEffect, useState} from "react";
import axios from "axios";


const LoginComponent = () =>{

const [ issubmitted , setIsSubmitted] = useState(false)

useEffect( ()=>{
    alert("Hello")
}
,[issubmitted] )


const handleSubmit = (e)=> {
    e.prevenDefault();
    setIsSubmitted(true);

}


return(
    <>
        <form onSubmit = { handleSubmit } > 
            <label> Click the below button to display pokemons:</label>
            <button> Click Here </button>
        </form>
    
    </>
)
}

export default LoginComponent;