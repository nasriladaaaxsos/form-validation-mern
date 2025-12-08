import React, { useState } from "react";

const About = (props)=>{

    const [ fruits, Setfruits] = useState( [ "Apple" , "Orange" , "Lemon"])
    return (
        <>
        <h3> { props.textMessage( "Onsite FSD 08.25 ")}</h3>
        <section>this is about us page</section>
        <ul>
            {
                fruits.map(  (item , index) => 
                    <li> {item} </li>
                )
            }
            
        </ul>
        </>
    );
}

export default About;