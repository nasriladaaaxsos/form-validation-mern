import React, { use, useState } from "react";


const useAnas = () => {

    const [myID, setID] = useState(12)

    function printLastnameError() {
        return "this should be more than 2";
    }


    return (
        { myID, printLastnameError }
    )

}

export default useAnas;