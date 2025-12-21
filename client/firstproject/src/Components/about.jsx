import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const About = (props) => {
 
    const { name } = useParams();
    const [fruits, Setfruits] = useState(["Apple", "Orange", "Lemon"])
    const [users, setUsers] = useState([])

    useEffect(() => {
/*
        axios.get("/api/v1/users")
            .then(response => {
                console.log("test");
                console.log(response.data.name)
                setUsers(response.data);
            })
            .catch(response => {
                console.log(response);
            })
*/
    }, [])


    return (
        <>
            <h3> {props.textMessage("Onsite FSD 08.25 ")}</h3>
            <section>this is about us page</section>
            <ul>
                {
                    fruits.map((item, index) =>
                        <li> {item} </li>
                    )
                }

                

            </ul>



            <h1> my name is {name} </h1>
        </>
    );
}

export default About;