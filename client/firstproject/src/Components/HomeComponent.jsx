import React from "react";


const Home = (props) => {

    const { name, location, hobbies : h  }  = props

    return (
        <>
            <h1>Hello All, my name is {name}! </h1>
            <h2>I am from  {location} </h2>
            <h3>My hobby is {h}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio explicabo cum libero modi molestias quo, aspernatur quos esse omnis facilis, enim eos maxime quidem quasi? Ipsam vel a soluta.</p>


            
        </>
    );

    




}

export default Home;



