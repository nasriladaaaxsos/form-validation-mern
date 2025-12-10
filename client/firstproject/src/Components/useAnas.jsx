import React, { useState } from "react";


const useAnas = () => {

    const [Ferror, setFerror] = useState(false)
    const [Lerror, setLerror] = useState(false)
    const [Eerror, setEerror] = useState(false)
    const [Perror, setPerror] = useState(false)

    //const [myID, setID] = useState(12)

    const validateFname = (value) => {
        if (value.length < 2) {
            setFerror(true)
        }
        else {
            setFerror(false)
            //setFname(e.target.value);
        }
    }

    // Return specific error message
    const firstnameErrorMsg = () => {
        return Ferror ? "First name should be more than 2 characters" : "";
    };


    return (
        { validateFname, firstnameErrorMsg}
    )

}

export default useAnas;