
import React, {useState} from "react";
import styles from '../css/style.module.css'

const ContactComponent = (props) => {

    const { fname: firstname } = props

    const[ naeem, setNaeem     ]  = useState(100)
    const submitBtn = () => {
        alert("Hello World!")
        setNaeem( naeem +1 )
    }

    const validateNickName = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <input type="text" name="Nickname" id="nickname" placeholder="fill nickname" onChange = { validateNickName } />
            <button onClick={submitBtn}  >  Click here!</button>
            <h1 className = {styles.btn} > {firstname} </h1>
            <h2>  { naeem} - {props.msg}</h2>



        </>
    )

}

export default ContactComponent;