import React, { useState } from "react";
//import './useAnas';
const Regester = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Ferror, setFerror] = useState(false)
    const [Lerror, setLerror] = useState(false)
    const [Eerror, setEerror] = useState(false)
    const [Perror, setPerror] = useState(false)

    //const [ printLastnameError] = useAnas();

    const handleFname = (e) => {
        if (e.target.value.length < 2) {
            setFerror(true)
        }
        else {
            setFerror(false)
            setFname(e.target.value);
        }
    }

    const handleLname = (e) => {
        if (e.target.value.length <= 2) {
            setLerror(true)
        }
        else {
            setLerror(false)
            setLname(e.target.value);

        }

    }
    const handleEmail = (e) => {
        if (e.target.value.length <= 2) {
            setEerror(true)
        }
        else {
            setEerror(false)
            setEmail(e.target.value);
        }

    }
    const handlePassword = (e) => {
        if (e.target.value.length <= 2) {
            setPerror(true)
        }
        else {
            setPerror(false)
            setPassword(e.target.value);
        }

    }
    const createUser = (e) => {
        e.prevenDefault();

    }

    const firstNameErrorMsg = () => {
        return Ferror ? "this should be more than 2" : "";
    }

    const lastNameErrorMsg = () => {
        return Lerror ? "this should be more than 2" : "";
    }

    const emailNameErrorMsg = () => {
        return Eerror ? "this should be more than 2" : "";
    }

    const passNameErrorMsg = () => {
        return Perror ? "this should be more than 2" : "";
    }

    return (
        <>
            <form onSubmit={(e) => { createUser }}  >
                <label >first name</label>
                <input type="text" name="firstname" placeholder="first name" onChange={handleFname} />
                <h3>{firstNameErrorMsg()}</h3>
                <br />
                <label >last name</label>
                <input type="text" name="lastname" placeholder="last name" onChange={handleLname} />
                <h3>{lastNameErrorMsg()}</h3>

                <br />
                <label >email</label>
                <input type="email" name="email" placeholder="email"  onChange={handleEmail} />
                <h3>{emailNameErrorMsg()}</h3>
                <br />
                <label >password</label>
                <input type="password" name="password" placeholder="password" onChange={handlePassword} />
                <h3>{passNameErrorMsg()}</h3>
                <br />
                <button>signup</button>
            </form>
        </>
    );
}
export default Regester;