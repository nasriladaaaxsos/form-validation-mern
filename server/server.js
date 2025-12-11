
const express = require("express")

const app = express()

const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//API
const users = [
    { firstName: "Reimu",  lastName: "Hakurei" , Id : "1111"   },
    { firstName: "Marisa", lastName: "Kirisame" , Id: "2222"  },
    { firstName: "Sanae",  lastName: "Kochiya" , Id : "33333"   },
    { firstName: "Sakuya", lastName: "Izayoi" , Id : "44444"    },
    { firstName: "Momiji", lastName: "Inubashiri" , Id : "55555" }
];

app.get( "/api/user" ,  ( req , res ) =>{

    
        res.json( { firstname : "EzzEddin" }    );

}   );


app.post("/add/user" , (req , res) =>{


    //req.body
    users.push( req.body )
    res.json( { statusCode : "Ok"}  )
}   );



app.listen(port, () => console.log('Listening on port 8000'));




