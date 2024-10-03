const express=require("express");
const cors=require("cors");
require("./config/mongodb");
const mongodbapi= require("./api/EmployeesAPI");
const multer=require("multer");

const app=express();
const port=5000;
app.use(cors()); // cors controller
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port, ()=>console.log(`application server started on port ${port} ...`))

/*

app.get("/employees/get/:_id", async function (request, response) {
  const data = await mongodbapi.getEmployeeById(request.params._id);
  response.send(data);
});
app.delete("/employees/delete/:_id", async function (request, response) {
  const data = await mongodbapi.deleteEmployeeById(request.params._id);
  response.send(data);
});
app.put("/employees/update/:_id", async function (request, response) {
  // console.log("from client:", request.body);
  console.log(request.body);
  const { _id, ...employee } = request.body;
  console.log(employee);
  const data = await mongodbapi.updateEmployee(request.params._id, employee);
  response.send(data);
});




const upload=multer();
app.put("/employees/upload/:_id", upload.single('employee_pic'), async function(request, response){
    console.log("in file upload");
 //  console.log(request.params._id);
 //  console.log(request.file);
   const data=await mongodbapi.uploadEmployeePic(request.params._id,request.file.buffer);
   response.send(data);
});
*/

///TODO:
app.post("/users/add", async function (request, response) {
  console.log("adduser", request.body);
  const data = await mongodbapi.addUser(request.body);
  response.send(data);
});
app.post("/blogs/add", async function (request, response) {
  console.log("addblogs", request.body);
  const data = await mongodbapi.addBlog(request.body);
  response.send(data);
});

app.get("/users/getall", async function (request, response) {
  //await mysqlapi.getAllEmployees();
  const data = await mongodbapi.getAllUsers();
  console.log(data);
  response.send(data);
});
app.get("/blogs/getall", async function (request, response) {
  //await mysqlapi.getAllEmployees();
  const data = await mongodbapi.getAllBlogs();
  console.log(data);
  response.send(data);
});