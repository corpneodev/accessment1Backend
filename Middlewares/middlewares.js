


const middle1=function(req, res, next){
    console.log("middleware 1 inbetween");
    // validation , authentication, encryption, 
    // if something is getting wrong then send response from here only 
    // else forward the request to next middleware
    next();
}

const middle2=function(req, res, next){
    console.log("middleware 2 inbetween");
    
    next();
}
module.exports={middle1,middle2}