
const UserController = require('../controllers/user.controller');


module.exports = app => {

app.get(   "/api/v1/users" ,     UserController.findAllUsers  );
app.get ("/api/v1/user/:id", UserController.findUser);
app.delete("/api/v1/delete" , UserController.deleteAll);
app.post("/api/v1/create" , UserController.createUser);
app.put("/api/v1/update" , UserController.updateUser);

}
