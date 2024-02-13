a();
b();


//FUNCTIONS ARE FIRST CLASS CITIZENS --> ABILTITY TO USE FUNCTIONS AS VALUES
function a()                //FUNCTION STATAMENTS/DECLARATION
{
    console.log("a called");
}


//IN LET AND CONST ACT LIKE SAME LIKE VAR FOR FUNCTIONS
var b=function b()                  //FUNCTION EXPRESSION
{
    console.log("b called");
}


//anonymous function : no name
//ANONYMOUS FUNCTION CAN BE PASSED IN FUNCTION EXPRESSION AS WELL
function ()
{
    console.log("b called");

}


//NAMED FUNCTION EXPRESSION
var b=function XYZ()                  // IT WILL GIVE ERROR CREATING THIS IN LOCAL SPACE AS IT IS DECLARED IN VARIABLE
{
    console.log("b called");
}

//FIRST CLASS FUNCTIONS : ABILTITY TO USE FUNCTIONS AS VALUES AND CAN PASS ARGUMENTS AS FUNCTION
//WE CAN PASS FUNCTION IN FUNCTION AS ARGUMENTS 

// WE CAN RETURN ANONYMOUS FUNCTION WITH FUNCTION


// DIFFERENCE BTW PARAMETER 
var b=function b(para1, para2)                  //PARAMETER---> LOCAL VARIABLES IN LOCAL SCOPE
{
    console.log("b called");
}


