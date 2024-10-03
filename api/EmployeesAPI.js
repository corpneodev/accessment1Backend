const BlogPostModel = require("../mongodbmodel/BlogPostModel");
const UserModel = require("../mongodbmodel/UserModel");
const fs=require("fs/promises")


/*
async function uploadEmployeePic(_id, employee_pic){
    const filter={_id:_id};
    const updates={employee_pic:employee_pic};
    return await EmployeeModel.updateOne(filter,updates);
}

module.exports={uploadEmployeePic,getAllEmployees,getEmployeeById, deleteEmployeeById,updateEmployee, addEmployee}

// module contains single file 
// EmployeesAPI. js ==> EmployeesAPI
*/
//TODO:
async function addBlog(blog) {
  // console.log(employee.employee_pic);
  //  readFile(employee.employee_pic)
  const BlogPostDoc = new BlogPostModel(blog);
  return await BlogPostDoc.save();
}
async function addUser(user) {
  // console.log(employee.employee_pic);
  //  readFile(employee.employee_pic)
  const UserDoc = new UserModel(user);
  return await UserDoc.save();
}

async function getAllUsers() {
  try {
    // Fetch all employees from the EmployeeModel
    return await UserModel.find({}).exec();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
async function getAllBlogs() {
  try {
    // Fetch all employees from the EmployeeModel
    return await BlogPostModel.find({}).exec();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

/*

async function getEmployeeById(_id) {
  return await EmployeeModel.findById(_id).exec(); // _id
}
async function deleteEmployeeById(_id) {
  return await EmployeeModel.deleteOne({ _id: _id });
}
async function updateEmployee(_id, employee) {
  const filter = { _id: _id };
  const updates = employee; // id must not be there
  return await EmployeeModel.updateOne(filter, updates);
}
  */
// module.exports = {
//   getAllEmployees,
//   addBlog,
//   getEmployeeById,
//   deleteEmployeeById,
//   updateEmployee,
// };

module.exports = {
  addBlog,
  addUser,
  getAllBlogs,
  getAllUsers,
};

