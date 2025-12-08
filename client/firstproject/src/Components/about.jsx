import React, { useState } from "react";

const About = ()=>{

    const [ fruits, Setfruits] = useState( [ "Apple" , "Orange" , "Lemon"])
    return (
        <>
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